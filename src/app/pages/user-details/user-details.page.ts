import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/pages/prof-user/user.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/compat/storage'; // Import AngularFireStorageReference
import { ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  uid: string = '';
  feedback: string = '';
  timestamp: string = '';
  fullname: string = '';
  idNumber: string = '';
  CompanyName: string = '';
  RegistrationNumber: string = '';
  idImg: string | null | undefined;
  selfieImg : string | null | undefined;

  user: any;

  @ViewChild('idUrlInput') idUrlInput!: ElementRef;
  @ViewChild('selfieUrlInput') selfieUrlInput!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private toastController: ToastController,
    private firestore: AngularFirestore,
    private router: Router,
    private storage: AngularFireStorage,
    private afAuth: AngularFireAuth,
    private loadingController: LoadingController,
  ) {}

  showFileInput(input: string) {
    if (input === 'idUrlInput') {
      this.idUrlInput.nativeElement.click();
    }
    else if(input === 'selfieUrlInput'){

      this.selfieUrlInput.nativeElement.click();
    }
  }


  async onFileChange(event: any, imgType: string) {
    const loading = await this.presentLoading();
    const file = event.target.files[0];
    console.log('File type:', file?.type);

    if (file && (file.name.toLowerCase().endsWith('.jpg') || file.name.toLowerCase().endsWith('.png') || file.name.toLowerCase().endsWith('.jpeg') || file.name.toLowerCase().endsWith('.pdf'))) {
      // Upload the PDF file to Firebase Storage
      const filePath = `guestReg/${Date.now()}_${file.name}`;
      const fileRef: AngularFireStorageReference = this.storage.ref(filePath);
      const task: AngularFireUploadTask = this.storage.upload(filePath, file);
  
      // Listen for changes in the upload task
      task.snapshotChanges().subscribe(
        (snapshot) => {
          if (snapshot?.state === 'success') {
            // File is uploaded, get its download URL
            fileRef.getDownloadURL().subscribe(async (downloadURL) => {
              // Update idImg with the download URL
             
              if (imgType === 'idImg') {
                this.idImg = downloadURL;
                console.log('The', file?.type, 'file successfully uploaded.')
                await loading.dismiss();

              }// Update eventOrganizerInfor with the download URL
              else if (imgType === 'selfieImg') {
               
                this.selfieImg = downloadURL;
                console.log('The', file?.type, 'file successfully uploaded.')
                await loading.dismiss();

              }
            });
          }
        },
        (error) => {
          console.error('Error uploading file: ', error);
        }
      );
    }
    else {
      console.error('Invalid file type. Please select the required file.');
    }

  }

  
  ngOnInit() {
    // Subscribe to changes in the authentication state
    this.userService.authState.subscribe((user) => {
      if (user) {
        this.uid = user.uid;
        this.fetchFeedback();
        this.fetchEventOrganizerData();
      } else {
        // Handle the case where the user is not authenticated
        console.error('User not authenticated');
      }
    });
  }

  fetchEventOrganizerData() {
    this.firestore
      .collection('users', (ref) => ref.where('uid', '==', this.uid))
      .valueChanges()
      .subscribe((eventOrganizerData: any[]) => {
        if (eventOrganizerData.length > 0) {
          const data = eventOrganizerData[0];
          this.fullname = data.fullname;
          this.idNumber = data.idNumber;
          this.CompanyName = data.CompanyName;
          this.RegistrationNumber = data.RegistrationNumber;
          this.idImg = data.idImg;
          this.selfieImg = data.selfieImg;
        }
      });
  }

  fetchFeedback() {
    this.firestore
      .collection('feedback', (ref) => ref.where('uid', '==', this.uid).orderBy('timestamp', 'desc'))
      .valueChanges()
      .subscribe((feedback: any[]) => {

        if (feedback.length > 0) {
          // Assuming you only want the latest feedback, you can adjust the logic if needed
          const latestFeedback = feedback[0];
          console.log('Latest Feedback:', latestFeedback);

          // Continue with the rest of your logic
          this.feedback = latestFeedback.feedback;
          this.timestamp = latestFeedback.timestamp;
        } else {
          // No feedback found, display default message
          this.feedback =
            "The user information is not verified, but will be in the next 24 hours of working days. Thank you";
          this.timestamp = '';
        }
      });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
    });
    await loading.present();
    return loading;
  }

  async updateUser() {
    const loading = await this.presentLoading();

    this.afAuth.authState.subscribe((user) => {
      if (user && user.email) {
        const userEmail = user.email;
  
        // Use the where clause to find the document based on email
        this.firestore
          .collection('users', (ref) => ref.where('email', '==', userEmail))
          .get()
          .subscribe((querySnapshot) => {
            if (!querySnapshot.empty) {
              const doc = querySnapshot.docs[0] as any; // Specify the type
              console.log('Document found');
  
              // Update the existing document with the new information
              doc.ref
              .update({
                CompanyName: this.CompanyName,
                RegistrationNumber: this.RegistrationNumber,
                idNumber: this.idNumber,
                fullname: this.fullname,
                idUrl: this.idImg,
                selfieImg: this.selfieImg,

              })
                .then(async () => {
                  await loading.dismiss();
                  this.presentSuccessToast('User information updated successfully!');
                  this.router.navigate(['/login']);
                })
                .catch(async (error: any) => {
                  await loading.dismiss();
                  this.presentErrorToast('Error updating user information: ' + error.message);
                });
            } else {
              loading.dismiss();
              console.log('Document not found');
            }
          });
      } else {
        loading.dismiss();
        this.presentErrorToast('User not authenticated.');
      }
    });
  }

  async presentSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }

  async presentErrorToast(message: string) {
    console.error(message); // Log error to console
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: 'danger', // Set the color to 'danger' for a red toast
    });
    toast.present();
  }

  navigateToHome() {
    this.router.navigate(['/login']);
  }
}

