import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-preck',
  templateUrl: './preck.page.html',
  styleUrls: ['./preck.page.scss'],
})
export class PreckPage implements OnInit {
  chatRooms: Observable<any[]>;
  model = {
    icon: 'chatbubbles-outline',
    title: 'No Chat Rooms',
    color: 'red'
   };

  constructor() { }

  ngOnInit() {
  }

}
