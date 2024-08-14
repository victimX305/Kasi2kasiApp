import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { GuestEventVerifyPage } from '../guest-event-verify/guest-event-verify.page';

@Component({
  selector: 'app-verify-guest-event',
  templateUrl: './verify-guest-event.page.html',
  styleUrls: ['./verify-guest-event.page.scss'],
})
export class VerifyGuestEventPage implements OnInit {

  unverifiedUsers: any[] = [];

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // Fetch unverified users from Firestore
    this.firestore.collection('users', ref => ref.where('verified', '==', false).where('registrationType', '==', 'GuestEvent'))
      .snapshotChanges()
      .subscribe((changes: any[]) => {
        this.unverifiedUsers = [];  // Reset the array to prevent duplicates
        changes.forEach(change => {
          if (change.type === 'added' || change.type === 'modified') {
            const data = change.payload.doc.data();
            data.id = change.payload.doc.id;
            this.unverifiedUsers.push(data);
          }
        });
      });
  }

  openUserModal(user: any) {
    this.modalController.create({
      component: GuestEventVerifyPage,
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
