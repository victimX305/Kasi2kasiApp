import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HelpSeePage } from '../help-see/help-see.page';

@Component({
  selector: 'app-help-v',
  templateUrl: './help-v.page.html',
  styleUrls: ['./help-v.page.scss'],
})
export class HelpVPage implements OnInit {

  helpMessages: any[] = [];
  groupedMessages: any = {};

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // Fetch help messages where 'seen' is not true
    this.firestore.collection('help', ref => ref.where('seen', '==', false).orderBy('timestamp', 'desc'))
      .valueChanges({ idField: 'id' }).subscribe((data: any[]) => {
        this.helpMessages = data;
        this.groupMessagesByEmail();
      });
  }

  groupMessagesByEmail() {
    this.groupedMessages = this.helpMessages.reduce((acc, message) => {
      const email = message.email;
      if (!acc[email]) {
        acc[email] = { 
          id: message.id, 
          fullname: message.fullname,
          email: message.email,
          messages: [],
          seen: message.seen,
        };
      }
      acc[email].messages.push(message.message);
      return acc;
    }, {});
  }

  getGroupedMessagesKeys() {
    return Object.keys(this.groupedMessages);
  }

  openUserModal(user: any) {
    console.log('Opening modal for user:', user);
    this.modalController.create({
      component: HelpSeePage,
      componentProps: {
        user: user,
      },
    })
    .then(modal => {
      modal.present();
    });
  }

  navigateToHome() {
    this.router.navigate(['/admin']);
  }
}
