import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EventService } from '../eventService/eventService';

@Component({
  selector: 'app-reminder1',
  templateUrl: './reminder1.page.html',
  styleUrls: ['./reminder1.page.scss'],
})
export class Reminder1Page implements OnInit {

  reminders: any[] = [];

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private modalController: ModalController,
    private eventService: EventService

  ) {}

  ngOnInit() {
    // Call a method to fetch reminders when the component initializes
    this.eventService.deletePastEvents();

    this.fetchReminders();
  }

  async fetchReminders() {
    const user = await this.afAuth.currentUser;

    if (user) {
      const userId = user.uid;

      // Retrieve reminders for the current user
      this.firestore
        .collection('reminders', (ref) => ref.where('userIds', 'array-contains', userId ))
        .valueChanges()
        .subscribe((reminders: any[]) => {
          this.reminders = reminders;
        });
    }
  }

  navigateToHome(){
    this.router.navigate(['/user-home'])
  }
 /* OpenModal(event: any) {
    this.modalController.create({
      component: PosterPagePage,
      componentProps: {
        eventData: event,
      },
    }).then((modalElement) => {
      modalElement.present();
    });
  }*/
}
