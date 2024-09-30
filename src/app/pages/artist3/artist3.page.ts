import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/user-registration.service';
import { ArtistProPage } from '../artist-pro/artist-pro.page';
import { ModalController } from '@ionic/angular';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-artist3',
  templateUrl: './artist3.page.html',
  styleUrls: ['./artist3.page.scss'],
})
export class Artist3Page implements OnInit {

  name: string = '';
  filteredGuests: any[] = [];
  searchText: string = '';
  guestReg: any[] = [];
  showNoMatchesMessage: boolean = false;
  Guests!: any[];
  internetStatus: boolean = false;

  constructor(
    private userRegistrationService: UserRegistrationService,
    private router: Router,
    private firestore: AngularFirestore,
    private modalController: ModalController
  ) { }


  navigateTo() {
    this.router.navigate(['/home-event-guest']);
  }

  ionViewDidEnter() {
    this.loadGuestsAndEvent();
  }

  loadGuestsAndEvent() {
    const partnerQuery = this.firestore.collection('users', ref => ref.where('registrationType', '==', 'GuestEvent').where('verified', '==', true)).valueChanges();
    const guestQuery = this.firestore.collection('users', ref => ref.where('registrationType', '==', 'guest').where('verified', '==', true)).valueChanges();

    combineLatest([partnerQuery, guestQuery]).pipe(
      map(([partnersData, guestsData]) => {
        const allUsers = [...partnersData, ...guestsData];
        return this.deduplicateArtists(allUsers)
          .sort((a, b) => {
            const nameA = a.StageName?.toUpperCase() || '';
            const nameB = b.StageName?.toUpperCase() || '';
            return nameA.localeCompare(nameB);
          });
      })
    ).subscribe((combinedData) => {
      this.guestReg = combinedData;
      this.filteredGuests = combinedData;
    });
  }

  filterArtists() {
    if (this.searchText.trim() !== '') {
      this.filteredGuests = this.guestReg.filter((artist) =>
        artist.StageName && artist.StageName.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      // If searchText is empty, show all artists
      this.filteredGuests = [...this.guestReg];
    }
    this.showNoMatchesMessage = this.filteredGuests.length === 0;
  }

  deduplicateArtists(artists: any[]): any[] {
    // Deduplicate artists based on a unique property (e.g., StageName)
    const uniqueArtists = new Map();
    artists.forEach((artist) => {
      uniqueArtists.set(artist.StageName, artist);
    });
    return Array.from(uniqueArtists.values());
  }

  ngOnInit() {
    this.loadGuestsAndEvent();
    this.checkInternetStatus(); 
    this.showNoMatchesMessage = false;
  }

  OpenModal(artist: any) {
    this.modalController.create({
      component: ArtistProPage,
      componentProps: {
        selectedArtist: artist,
      },
    }).then((modalElement) => {
      modalElement.present();
    });
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

  retry() {
    window.location.reload(); // Refresh the page when data is fetched
  }

}
