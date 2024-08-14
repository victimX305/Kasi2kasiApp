import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-artist-pro',
  templateUrl: './artist-pro.page.html',
  styleUrls: ['./artist-pro.page.scss'],
})
export class ArtistProPage implements OnInit {
  @Input() selectedArtist: any;
  internetStatus: boolean = false;

  constructor(
    private modalController: ModalController
  ) { }
  
  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  ngOnInit() {
    this.checkInternetStatus();
  }

  checkInternetStatus() {
    this.internetStatus = navigator.onLine;
    window.addEventListener('online', () => {
      this.internetStatus = true;
    });
    window.addEventListener('offline', () => {
      this.internetStatus = false;
    });
  }
  
  retry()
  {
    window.location.reload(); // Refresh the page when data is fetched
  }

}
