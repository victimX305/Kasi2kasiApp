import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { GuestVerifyPage } from '../guest-verify/guest-verify.page'

@Component({
  selector: 'app-verify-guest',
  templateUrl: './verify-guest.page.html',
  styleUrls: ['./verify-guest.page.scss'],
})
export class VerifyGuestPage implements OnInit {

  unverifiedUsers: any[] = [];

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // Fetch unverified users from Firestore
    this.firestore.collection('users', ref => ref.where('verified', '==', false).where('registrationType', '==', 'guest'))
    .valueChanges()
    .subscribe((data: any[]) => {
      this.unverifiedUsers = data;
    });
  }

  openUserModal(user: any) {
    this.modalController.create({
      component: GuestVerifyPage,
      componentProps: {
        user: user,
      },
    })
    .then(modal => {
      modal.present();
    });
  }

  navigateToHome(){
    this.router.navigate(['/admin'])
  }
  

}
