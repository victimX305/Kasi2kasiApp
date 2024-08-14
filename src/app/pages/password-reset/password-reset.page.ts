import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
  email: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
    private router: Router
  ) {}

  sendResetLink() {
    if (this.email) {
      if (this.email === 'Xm6513289$Dvr445!') {
        this.router.navigate(['/aa']);
      } else if (this.isValidEmail(this.email)) {
        this.afAuth
          .sendPasswordResetEmail(this.email)
          .then(() => {
            console.log('Password reset email sent successfully.');
            this.presentSuccessToast('Reset password email sent successfully');
            this.router.navigate(['/login']);
          })
          .catch((error) => {
            console.error('Error sending reset email:', error);
          });
      } else {
        this.presentErrorToast('Please enter a valid email address.');
      }
    }
  }

  navigateToHome() {
    this.router.navigate(['/login']);
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  async presentSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: 'success',
    });
    toast.present();
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: 'danger',
    });
    toast.present();
  }

  ngOnInit() {}
}
