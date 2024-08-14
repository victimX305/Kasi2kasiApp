import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router'; // Import Router
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-background-settings',
  templateUrl: './background-settings.page.html',
  styleUrls: ['./background-settings.page.scss'],
})
export class BackgroundSettingsPage implements OnInit {
  preferredPictures = [
    'assets/wallp1.jpg',
    'assets/wallp2.jpg',
    'assets/wallp4.jpg',
    'assets/wallp5.jpg',
    // Add paths to preferred pictures
  ];
  currentUserId: string;
  
  constructor(
    private router: Router, // Inject Router
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private authService: AuthService,
    private loadingController: LoadingController
  ) {
    this.currentUserId = this.authService.getId();
  }

  selectPreferredPicture(picture: string) {
    this.saveWallpaper(picture);
  }

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const loading = await this.loadingController.create({
        message: 'Uploading...',
      });
      await loading.present();
  
      try {
        const filePath = `wallpapers/${this.currentUserId}/${file.name}`;
        const fileRef = this.storage.ref(filePath);
        await this.storage.upload(filePath, file);
        const fileURL = await fileRef.getDownloadURL().toPromise();
        this.saveWallpaper(fileURL);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        await loading.dismiss();
      }
    }
  }

  saveWallpaper(url: string) {
    this.firestore.collection('wallpapers').doc(this.currentUserId).set({ url })
      .then(() => {
        // Navigate to /chats after saving wallpaper
        this.router.navigate(['/chating'], { replaceUrl: true }); // Use replaceUrl to replace the current history state
      })
      .catch(error => {
        console.error('Error saving wallpaper:', error);
      });
  }

  ngOnInit() {
  }

}