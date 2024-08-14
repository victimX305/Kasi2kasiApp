import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {  Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { ImageModalPage } from 'src/app/image-modal/image-modal.page';



@Component({
  selector: 'app-prof-event',
  templateUrl: './prof-event.page.html',
  styleUrls: ['./prof-event.page.scss'],
})
export class ProfEventPage implements OnInit {
  @ViewChild('fileInput') fileInput:any;

  user: any;
  pictures: any[] = [];
  isFullScreen: boolean = false;


  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private loadingController: LoadingController,
    private storage: AngularFireStorage,
    private modalController: ModalController

  ) { 

    this.afAuth.authState.subscribe(user => {
      if (user) {
        const uid = user.uid;
        console.log('User UID:', uid);
        
        // Query Firestore for user information based on UID fieald
        this.firestore.collection('users', ref => ref.where('uid', '==', uid)).valueChanges().subscribe(userData => {
          if (userData.length > 0) {
            this.user = userData[0];
            console.log('User Data (users):', userData[0]);
          } else {
            this.firestore.collection('EventOrganizers', ref => ref.where('uid', '==', uid)).valueChanges().subscribe(eventOrganizerData => {
              if (eventOrganizerData.length > 0) {
                this.user = eventOrganizerData[0];
                console.log('User Data (EventOrganizers):', eventOrganizerData[0]);
              } else {
                this.firestore.collection('Guests', ref => ref.where('uid', '==', uid)).valueChanges().subscribe(guestData => {
                  if (guestData.length > 0) {
                    this.user = guestData[0];
                    console.log('User Data (Guests):', guestData[0]);
                  } else {
                    this.firestore.collection('GueastEventorg', ref => ref.where('uid', '==', uid)).valueChanges().subscribe(gueastEventorgData => {
                      if (gueastEventorgData.length > 0) {
                        this.user = gueastEventorgData[0];
                        console.log('User Data (GueastEventorg):', gueastEventorgData[0]);
                      } else {
                        console.log('User data not found in any collection.');
                      }
                    })
                  }
                })
              }
            })
          }
        })
      } else {
        console.log('User not authenticated.');
      }
    });
  }

  async toggleFullScreen(event: any) {
    if (!this.isFullScreen) {
      const modal = await this.modalController.create({
        component: ImageModalPage,
        componentProps: {
          imageUrl: this.user?.proPic
        }
      });
      await modal.present();
    }
    this.isFullScreen = !this.isFullScreen;
    event.stopPropagation();
  }


 async showFileInput(inputId: String) {

    if (inputId === 'fileInput') {
   this.fileInput.nativeElement.click();
    }

    
}


async onFileSelected(event: any) {
  const loading = await this.presentLoading(); // Show loading popup

  const user = await this.afAuth.currentUser;

  if (user && event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    const userEmail = user.email;
    const filePath = `user_profile_pictures/${userEmail}_${file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = storageRef.put(file);

    uploadTask.then(async () => {
      const downloadUrl = await storageRef.getDownloadURL().toPromise();

      // Update the profile picture URL for the current user
      await this.updateProPicForCurrentUser(downloadUrl);
      console.log('Profile picture updated successfully');

    })
    .catch(error => {
      console.error('Error uploading picture: ', error);
    });

   
  }
 
}

async updateProPicForCurrentUser(proPicUrl: string): Promise<void> {
  const user = await this.afAuth.currentUser;
   // const loading = await this.presentLoading(); // Show loading popup

  if (user) {
    const userEmail = user.email;

    try {
      const querySnapshot = await this.firestore.collection('users', ref => ref.where('email', '==', userEmail).where('registrationType', '==', 'partner')).get().toPromise();

      if (querySnapshot && !querySnapshot.empty) {
        querySnapshot.forEach(doc => {
          this.firestore.collection('users').doc(doc.id).update({ proPic: proPicUrl })
            .then(() => {
              console.log('Profile picture updated successfully.');

            })
            .catch(error => {
              console.error('Error updating profile picture:', error);
            });
        });
      } else {
        console.error('No matching user document found.');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
   
  }
}


async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Please wait...',
    duration: 5000 // Set a duration or use dismiss() to manually dismiss it
  });
  await loading.present();
  return loading;
}

  navigateToHome(){
    this.router.navigate(['/event-org-home'])
  }

  
  ngOnInit() {
    
  }

}
