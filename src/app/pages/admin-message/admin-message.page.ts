import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.page.html',
  styleUrls: ['./admin-message.page.scss'],
})
export class AdminMessagePage implements OnInit {
  uid: string = '';
  feedback: string = '';
  internetStatus: boolean = false;

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController,

    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(params => {
      this.uid = params['uid'];
    });
  }

 // Function to submit feedback
 async submitFeedback() {
  const loading = await this.presentLoading(); // Show loading popup

  // Check if UID and feedback are provided
  if (this.uid && this.feedback) {
    // Save feedback to Firestore collection 'feedback'
    this.firestore.collection('feedback').add({
      uid: this.uid,
      feedback: this.feedback,
      timestamp: new Date(),
    })
    .then(() => {
      // Feedback submitted successfully
      this.presentToast('Feedback submitted successfully.');
      // Redirect to the appropriate page
      this.router.navigate(['/admin']);
    })
    .catch((error) => {
      // Handle error
      console.error('Error submitting feedback:', error);
      this.presentToast('Error submitting feedback. Please try again.');
    });
  } else {
    // Show a toast message if UID or feedback is missing
    this.presentToast('Please provide both UID and feedback.');
  }

  loading.dismiss(); 

}

async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Please wait...',
    duration: 5000 // Set a duration or use dismiss() to manually dismiss it
  });
  await loading.present();
  return loading;
}

// Helper function to present a toast message
async presentToast(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 3000,
    position: 'bottom',
  });
  toast.present();
}

navigateToHome(){
  this.router.navigate(['/admin'])
}

ngOnInit() {
  // Fetch events data from Firestore
  this.checkInternetStatus();
}

checkInternetStatus() {
  this.internetStatus = navigator.onLine;
  window.addEventListener('online', () => {
    this.internetStatus = true;
  });
  window.addEventListener('offline', () => {
    this.internetStatus = false;
  });
}

retry()
{
  window.location.reload(); // Refresh the page when data is fetched
}
}
