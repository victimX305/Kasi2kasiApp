

import { Component, OnInit, ViewChild, ElementRef, Renderer2, ChangeDetectorRef  } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonPopover, LoadingController, NavController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ChatingService } from 'src/app/services/chating.service';

@Component({
  selector: 'app-chating',
  templateUrl: './chating.page.html',
  styleUrls: ['./chating.page.scss'],
})
export class ChatingPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  id: string;
  fullname: string;
  recipientId: string = '';
  currentUserId: string;
  chats: Observable<any[]>;
  message: string = '';
  selectedFile: File | null = null;
  isLoading: boolean = false;
  model = {
    icon: 'chatbubbles-outline',
    title: 'No Conversation',
    color: 'danger'
  };
  wallpaperUrl: string = 'assets/wallp3.jpg'; 
  @ViewChild('popover') popover: IonPopover;
  showSubMenu: boolean = false;
  isUploading: boolean = false; 
  loader: HTMLIonLoadingElement;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    public chatingService: ChatingService,
    private afAuth: AngularFireAuth,
    private storage: AngularFireStorage,
    private popoverController: PopoverController,
    private renderer: Renderer2, // Inject Renderer2
    private authService: AuthService,
    private firestore: AngularFirestore,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private loadingController: LoadingController
    
  ) {
    this.currentUserId = this.authService.getId();
    console.log('Constructor - Current User ID:', this.currentUserId);
  }

  ngOnInit() {
    const data: any = this.route.snapshot.queryParams;
    if (data?.fullname) {
      this.fullname = data.fullname;
    }
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.navCtrl.back();
      return;
    }
    this.id = id;
    this.chatingService.getChatRoomMessages(this.id);
    this.chats = this.chatingService.selectedChatRoomMessages;
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.currentUserId = user.uid;
      } else {
        console.error('User not logged in');
      }
    });
    this.loadWallpaper();

  }
  loadWallpaper() {
    this.firestore.collection('wallpapers').doc(this.currentUserId).valueChanges().subscribe((doc: any) => {
      console.log('Firestore document:', doc);
      if (doc && doc.url) {
        this.wallpaperUrl = doc.url;
        console.log('Wallpaper URL set to:', this.wallpaperUrl);
      } else {
        this.wallpaperUrl = 'assets/wallp3.jpg';
        console.log('Default wallpaper URL set');
      }
      this.cdr.detectChanges();
      this.setBackground();
    }, error => {
      console.error('Error loading wallpaper:', error);
      this.wallpaperUrl = 'assets/wallp3.jpg';
      this.cdr.detectChanges();
      this.setBackground();
    });
  }

  setBackground() {
    const content = document.querySelector('ion-content');
    if (content) {
      console.log('Setting background image to:', this.wallpaperUrl);
      this.renderer.setStyle(content, 'background-image', `url(${this.wallpaperUrl})`);
      this.renderer.setStyle(content, 'background-size', 'cover');
      this.renderer.setStyle(content, 'background-repeat', 'no-repeat');
      this.renderer.setStyle(content, 'background-position', 'center center');
    } else {
      console.error('Failed to find ion-content to set background');
    }
  }
  

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.content) {
      this.content.scrollToBottom(500);
    }
  }

  async presentLoader() {
    this.loader = await this.loadingController.create({
      message: 'Uploading...',
      spinner: 'crescent'
    });
    await this.loader.present();
  }

  async dismissLoader() {
    if (this.loader) {
      await this.loader.dismiss();
    }
  }

  async sendMessageInComponent(event?: Event) {
    if (event instanceof KeyboardEvent) {
      event.preventDefault();
    }

    if (!this.message && !this.selectedFile) {
      console.error('Message or file is required');
      return;
    }

    try {
      this.isLoading = true;
      if (this.selectedFile) {
        await this.presentLoader(); // Show loader
        await this.uploadImageAndSendMessage();
      } else {
        await this.chatingService.sendMessage(this.id, this.message);
      }
      this.scrollToBottom();
    } catch (error) {
      if (error instanceof FirebaseError && error.code === 'permission-denied') {
        console.error('Permission denied. You do not have access to this resource.');
      } else {
        console.error('Error sending message:', error);
      }
    } finally {
      this.message = '';
      this.selectedFile = null;
      this.isLoading = false;
      await this.dismissLoader(); // Hide loader
    }
  }

  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.sendMessageInComponent();
    }
  }

  async uploadImageAndSendMessage() {
    if (!this.selectedFile) return;
  
    const filePath = `images/${new Date().getTime()}_${this.selectedFile.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.selectedFile);
  
    const snapshot = await task.snapshotChanges().toPromise();
    const downloadURL = await fileRef.getDownloadURL().toPromise();
  
    await this.chatingService.sendMessage(this.id, downloadURL, 'image'); // Remove the recipientId
  }
  

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents the default new line behavior
      this.sendMessageInComponent();
    }
  }

  openSettings() {
    this.router.navigate(['/background-settings']);
  }

  async uploadBackgroundPicture(file: File) {
    try {
      this.isLoading = true;
      const filePath = `backgrounds/${new Date().getTime()}_${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);

      const snapshot = await task.snapshotChanges().toPromise();
      const downloadURL = await fileRef.getDownloadURL().toPromise();

      // Log the download URL to verify the upload
      console.log('Download URL:', downloadURL);

      // Use Angular's Renderer2 to set the background image
      this.renderer.setStyle(this.content.getScrollElement(), 'backgroundImage', `url(${downloadURL})`);
      this.renderer.setStyle(this.content.getScrollElement(), 'backgroundSize', 'cover');

    } catch (error) {
      console.error('Error uploading background picture:', error);
    } finally {
      this.isLoading = false;
    }
  }
  async handlePopoverClick(action: string) {
    await this.popover.dismiss();
    if (action === 'chat') {
      this.openSettings();
    } else if (action === 'logout') {
      this.logout();
    }
  
  }
  logout()
  {

  }
  
}

@Component({
  selector: 'settings-popover',
  template: `
    <ion-list>
      <ion-item (click)="selectFile()">
        <ion-label>Upload Background Picture</ion-label>
        <input type="file" accept="image/*" hidden #backgroundInput (change)="onFileSelected($event)">
      </ion-item>
    </ion-list>
  `
})
export class SettingsPopoverComponent {
  @ViewChild('backgroundInput') backgroundInput: ElementRef;

  constructor(private popoverController: PopoverController) {}

  selectFile() {
    this.backgroundInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.popoverController.dismiss({ file });
    }
  }
}