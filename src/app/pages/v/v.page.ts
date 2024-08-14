import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { GuardsPage } from 'src/app/guards/guards.page';

@Component({
  selector: 'app-v',
  templateUrl: './v.page.html',
  styleUrls: ['./v.page.scss'],
})
export class VPage implements OnInit {

  users: any[] = []; 

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.firestore.collection('users')
    .valueChanges()
    .subscribe((data: any[]) => {
      this.users = data;
    });
  }

  openUserModal(user: any) {
    this.modalController.create({
      component: GuardsPage,
      componentProps: {
        user: user,
      },
    })
    .then(modal => {
      modal.present();
    });
  }

  navigateToHome() {
    this.router.navigate(['/aa']);
  }
  
}
