import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavParams, ModalController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

interface User {
  uid: string;
  email: string;
  verified: boolean;
  registrationType: string;
}

@Component({
  selector: 'app-guest-verify',
  templateUrl: './guest-verify.page.html',
  styleUrls: ['./guest-verify.page.scss'],
})
export class GuestVerifyPage implements OnInit {
  user: any;
  unverifiedUsers: any[]=[];

  constructor(
    private firestore: AngularFirestore,
    private navParams: NavParams,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  

  async verifyUser(uid: string) {
    const loading = await this.presentLoading(); // Show loading popup

    // Find the document in unverifiedGuests collection based on UID
    const unverifiedUsersRef = this.firestore.collection('users', ref => ref.where('uid', '==', uid));
  
    unverifiedUsersRef.get().subscribe((snapshot) => {
      if (snapshot.size > 0) {
        // If a document with the specified UID is found
        snapshot.forEach((doc) => {
          const unverifiedUser = doc.data() as User; // Cast document data to User type
          
          // Log the fetched user data
          console.log('Unverified guest data:', unverifiedUser);
  
          // Update the document
          doc.ref.update({
            verified: true,
          })
          .then(() => {
            console.log('Document successfully updated!');
            const email = unverifiedUser.email; // Fetch email from the document data
            console.log('Email fetched from user document:', email); // Log the fetched email
            this.sendEmail(email); // Send email after verification
            this.closeModal();
          });
        });
      } else {
        console.log('No document found for the specified UID.');
      }
    })
    loading.dismiss(); 
  }

  sendEmail(email: string) {
    const templateParams = {
      to_email: email,
      message: 'You have been verified to use Kasi2Kasi App. You can now access it.',
    };
  
    console.log('Sending email with template parameters:', templateParams); // Log the email parameters
  
    emailjs.send('service_thtpx8i', 'template_pq910ew', templateParams, '1ErLlmC_japoemPY9')
      .then((response: EmailJSResponseStatus) => {
        console.log('Email sent successfully!', response.status, response.text);
      }, (error) => {
        console.error('Failed to send email.', error);
      });
  }
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 5000 // Set a duration or use dismiss() to manually dismiss it
    });
    await loading.present();
    return loading;
  }
  
  ngOnInit() {
    this.user = this.navParams.get('user');
  }

  closeModal() {
    this.modalController.dismiss();
  }

  openPDFInNewTab() {
    window.open(this.user.idImg, '_blank');
  }

}