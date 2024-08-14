import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent  implements OnInit {

  constructor(private navCtrl: NavController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Method to handle chat icon click
  openChat(userId: string) {
    this.navCtrl.navigateForward(`/chats/${userId}`);
  }

}
