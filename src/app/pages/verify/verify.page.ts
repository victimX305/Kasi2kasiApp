import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VerifyProPage } from '../verify-pro/verify-pro.page';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

  unverifiedUsers: any[] = [];

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // Fetch unverified users from Firestore
    this.firestore.collection('users', ref => ref.where('verified', '==', false).where('registrationType', '==', 'partner'))
    .valueChanges()
    .subscribe((data: any[]) => {
      this.unverifiedUsers = data;
    });
  }

  openUserModal(user: any) {
    this.modalController.create({
      component: VerifyProPage,
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
