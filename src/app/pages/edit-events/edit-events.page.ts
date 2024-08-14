import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { IonDatetime, LoadingController, ToastController } from '@ionic/angular';
import { IonModal, ModalController } from '@ionic/angular';
import { GuestListPage } from '../guest-list/guest-list.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { City, District, Municipality, Province, Suburb } from './locations';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { EditLocationPickPage } from '../edit-location-pick/edit-location-pick.page';
import { LocationPickPage } from '../location-pick/location-pick.page';


function requiredFileSelected(): (control: AbstractControl) => ValidationErrors | null {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value;

    if (!file) {
      return { requiredFileSelected: true };
    }

    return null;
  };
}

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.page.html',
  styleUrls: ['./edit-events.page.scss'],
})
export class EditEventsPage implements OnInit {

  event: any = {};

  @ViewChild('fileInput') fileInput:any;
  @ViewChild('datetime', { static: false }) datetimePicker!: IonDatetime;
  @ViewChild(IonModal) modal!: IonModal;
  
  selectedGuests: any[] = [];
  selectedGuestsText: string = '';
  guests: any[] = [];

  provincess: any[] = [];

  selectedProvince: Province | any = null;
  selectedDistrict: District | any = null;
  selectedMunicipality: Municipality | any = null;
  selectedCity: City | any = null;
  selectedSuburb: Suburb | any = null;
  selectedWard: String | any = null;

  guest: any[] = [];

  filteredCategories: any[] = [];
  searchQuery = '';
  selectedCategories: any[] = []; // Use an array to store selected categories

  selectedLocation: any;
  location: any;
  //province: string = '';

  locationModalButton = false;


  events: any = {
    title: '',
    organizer: '',
    eventType: '',
    phoneNumber: '',
    eventFormat: '',
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    hashtags: '',
    posterUrl: null,
    selectedGuestsText: '',
    province: '',
    district: '',
    municipality: '',
    city: '',
    suburb: '',
    ward: '',
    AddressLine1: '',
    AddressLine2: '',
    onlineEventLink: ''
  };

  myForm = new FormGroup({
    title: new FormControl ('', [Validators.required, Validators.maxLength(50)]),
    posterUrl: new FormControl(null, [Validators.required, requiredFileSelected()]), // Example: Only allow jpg files
    province: new FormControl ('', [Validators.required, Validators.maxLength(50)]),
    district: new FormControl ('', [Validators.required, Validators.maxLength(50)]),
    municipality: new FormControl ('', [Validators.required, Validators.maxLength(50)]),
    city: new FormControl ('', [Validators.required, Validators.maxLength(50)]),
    suburb: new FormControl ('', [Validators.required, Validators.maxLength(50)]),
    ward: new FormControl ('', [Validators.required, Validators.maxLength(50)]),

  });
  
  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private storage: AngularFireStorage,
    private modalController: ModalController,
    private router: Router,
    private afAuth: AngularFireAuth,
    private loadingController: LoadingController,
    private toastController: ToastController

  ) {
    this.route.paramMap.subscribe((params) => {
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          const userEmail = user.email;
          const eventId = params.get('documentId');

          if (eventId) {
            this.firestore
              .collection('events')
              .doc(eventId)
              .valueChanges()
              .subscribe((event: any) => {
                if (event.organizer === userEmail) {
                  this.event = event;
                } else {
                  console.log('Unauthorized to update this event.');
                }
              });
          }
        }
      });
    });
  }


 // Handle file upload
 showFileInput(inputId: String) {
  if (inputId === 'fileInput') {
      this.fileInput.nativeElement.click();
    } 
  }

  async onFileChange(events: any, imgType: string) {
    const loading = await this.presentLoading();
    const file = events.target.files[0];
  
    if (file) {
      // Generate a unique file path
      const filePath = `event/${Date.now()}_${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task: AngularFireUploadTask = this.storage.upload(filePath, file);
  
      // Use promises to handle the asynchronous operations
      task.snapshotChanges().subscribe(
        (snapshot) => {
        // Wait for the upload to complete
       if (snapshot?.state === 'success') {
        console.log('File got the url successfully');

         // File is uploaded, get its download URL
         fileRef.getDownloadURL().subscribe(async (downloadURL) => {
          // Update eventOrganizerInfor with the download URL
          if (imgType === 'posterUrl') {
            this.event.posterUrl = downloadURL;
            console.log('File uploaded successfully');
            await loading.dismiss();

          }
         }) 
       }
      });
    }
  }
 

   async openModal() {
    const modal = await this.modalController.create({
      component: GuestListPage,
    });

    //this.locationModalButton = true;

    modal.onDidDismiss().then((data) => {
      if (data.role === 'confirm') {
        // Create a comma-separated list of guest names
        this.event.selectedGuestsText = data.data.map((guests: { StageName: any; }) => guests.StageName).join(', ');        }
    });


    await modal.present();
  }

  async openLocation() {
    const modal = await this.modalController.create({
      component: LocationPickPage,
    });

    this.locationModalButton = true;

    modal.present();
  
    modal.onWillDismiss().then((data) => {
      if (data.role === 'confirm' && data.data) {
        this.selectedLocation = data.data; // Set the selected location data in your component
      }
    });
  
    await modal.present();
  }
  

ngOnInit() { 
  this.route.paramMap.subscribe((params) => {
    const eventId = params.get('documentId');
    if (eventId) {
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          const userEmail = user.email;
          console.log('User email:', userEmail); // Debug log

          this.firestore
            .collection('events')
            .doc(eventId)
            .valueChanges()
            .subscribe((event: any) => {
              console.log('Fetched event data:', event); // Debug log

              if (event && event.organizer === userEmail) {
                // Set the event data for editing
                this.event = event;

                if (this.event.eventFormat === 'Venue' || this.event.eventFormat === 'Hybrid Event') {
                    this.locationModalButton = true;
                  }
              } else {
                // Handle the case where the user is not the organizer
                console.log('Unauthorized to edit this event.');
                this.router.navigate(['/manage-events']);
              }
            });
        }
      });
    }
  });
 }

 onEventFormatChange() {
  if (this.event.eventFormat === 'Venue') {
    this.event.onlineEventLink = '';
  } else if (this.event.eventFormat === 'Online Event') {
    this.event.province = '';
    this.event.district = '';
    this.event.municipality = '';
    this.event.city = '';
    this.event.suburb = '';
    this.event.ward = '';
    this.event.AddressLine1 = '';
    this.event.AddressLine2 = '';
    this.selectedLocation = null; // Clear selected location
  }
}


 // Use the organizer field for authentication
  async updateEvent() {
  const loading = await this.presentLoading(); // Show loading popup

  this.afAuth.authState.subscribe((user) => {
    if (user) {
      const userEmail = user.email;
      if (this.event.organizer === userEmail) {
        this.firestore
          .collection('events')
          .doc(this.event.documentId)
          .update(this.event)
          .then(async () => {
            console.log('Event updated:', this.event);

            if(this.event.eventFormat === 'Venue'  && this.locationModalButton){

              this.event.onlineEventLink = '';
              this.updateEventLocation();

              console.log('This is a venue event');

              this.router.navigate(['/manage-events']);

            }
            else if(this.event.eventFormat === 'Hybrid Event' && this.locationModalButton){

              this.updateEventLocation();

              console.log('This is a Hybrid event');

              this.router.navigate(['/manage-events']);

            }
            else if(this.event.eventFormat === 'Online Event'){

              this.event.province = '';
              this.event.district = '';
              this.event.municipality = '';
              this.event.city = '';
              this.event.suburb = '';
              this.event.ward = '';
              this.event.AddressLine1 = '';
              this.event.AddressLine2 = '';

              this.updateEventLocation();

              console.log('This is an Online event');

              this.router.navigate(['/manage-events']);
            }
            else{

              console.log('Cannot edit event. Please fill in all required fields and make sure you have selected the location and guest buttons.');
              //return;
        
              const toast = await this.toastController.create({
                message: 'Please click on the venue button to proceed.',
                duration: 2000,
                position: 'bottom',
                color: 'danger',
              });
              toast.present();
              return; 

            }
            this.updateGuests();

            this.router.navigate(['/manage-events']);
          });
      } else {
        console.log('Unauthorized to update this event.');
      }
    }
  });
  loading.dismiss(); 

}

async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Please wait...',
    duration: 5000 // Set a duration or use dismiss() to manually dismiss it
  });
  await loading.present();
  return loading;
}



updateGuests() {
  this.afAuth.authState.subscribe((user) => {
    if (user) {
      const userEmail = user.email;
      if (this.event.organizer === userEmail) {
        this.firestore
           .collection('events')
           .doc(this.event.documentId)
           .update({ 
            selectedGuestsText: this.event.selectedGuestsText,
            
           })
           .then(() => {
            console.log('Gusets updated:', this.event);
           });
      } else {
        console.log('Unauthorized to update this guests.')
      }
    }
  })
}

updateEventLocation() {
  this.afAuth.authState.subscribe((user) => {
    if (user) {
      const userEmail = user.email;
      if (this.event.organizer === userEmail) {
        this.firestore
          .collection('events')
          .doc(this.event.documentId)
          .update({ 
            province: this.selectedLocation?.selectedProvince?.name || '',
            district: this.selectedLocation?.selectedDistrict?.name || '',
            municipality: this.selectedLocation?.selectedMunicipality?.name || '',
            city: this.selectedLocation?.selectedCity?.names || '',
            suburb: this.selectedLocation?.selectedSurburb?.name || '',
            ward: this.selectedLocation?.selectedWard || '',
            AddressLine1:  this.selectedLocation?.AddressLine1,
            AddressLine2:  this.selectedLocation?.AddressLine2
          })
          .then(() => {
            console.log('Location updated successfully.');
          })
          .catch((error) => {
            console.error('Error updating location:', error);
          });
      } else {
        console.log('Unauthorized to update this location.');
      }
    }
  });
}





 navigateToHome(){
  this.router.navigate(['/manage-events'])
}

cancelEdit() {
  this.router.navigate(['/manage-events'])
}

}