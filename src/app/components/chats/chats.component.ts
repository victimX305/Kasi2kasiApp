import { Component, OnInit } from '@angular/core';
import { ChatsService } from 'src/app/services/chats.service';
import { ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ChatingService } from 'src/app/services/chating.service';
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent  implements OnInit {
  data: any[];



  constructor(private yourService: ChatingService
  ) {

  }

  ngOnInit(): void {
    this.yourService.getData().subscribe((result) => {
      this.data = result;
    });
  
  }
   
  

 

}
