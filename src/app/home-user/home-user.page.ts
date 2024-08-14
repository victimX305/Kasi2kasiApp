import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.page.html',
  styleUrls: ['./home-user.page.scss'],
})
export class HomeUserPage implements OnInit {
  @Input() eventData: any;

  events: any [] = [];

  constructor(
    private modalCtrl: ModalController,
    public alertController: AlertController,
    private firestore: AngularFirestore, // Inject AngularFirestore

  ) { }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit() {
  }

}
