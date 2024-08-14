import { Component, Injectable, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { IonDatetime, LoadingController, ToastController } from '@ionic/angular';
import { IonModal, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestListPage } from '../guest-list/guest-list.page';
import { LocationPickPage } from '../location-pick/location-pick.page';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ChatingService } from 'src/app/services/chating.service';



function alphabeticCharacters(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!/^[A-Za-z\s]+$/.test(value)) {
    return { alphabetic: true };
  }
  return null;
}



function numericOnly(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!/^\d+$/.test(value)) {
    return { numeric: true };
  }
  return null;
}

function requiredFileSelected(): (control: AbstractControl) => ValidationErrors | null {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value;

    if (!file) {
      return { requiredFileSelected: true };
    }

    return null;
  };
}

function validPhoneNumber(control: AbstractControl): ValidationErrors | null {
  const phoneNumber = control.value;

  // Check if the phone number contains exactly 10 digits
  if (/^\d{10}$/.test(phoneNumber)) {
    return null; // It's a valid phone number
  } else {
    return { invalidPhoneNumber: true }; // Indicates an invalid phone number
  }
}


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-create-event2',
  templateUrl: './create-event2.page.html',
  styleUrls: ['./create-event2.page.scss'],
})
export class CreateEvent2Page {

  @ViewChild('fileInput') fileInput:any;
  @ViewChild('datetime', { static: false }) datetimePicker!: IonDatetime;
  @ViewChild(IonModal) modal!: IonModal;

  selectedGuests: any[] = [];
  selectedGuestsText: string = '';
  guests: any[] = [];

  
  guest: any[] = [];
  filteredCategories: any[] = [];
  searchQuery = '';
  selectedCategories: any[] = []; // Use an array to store selected categories

  selectedLocation: any;
  location: any;
  province: string = '';

  //eventForm: FormGroup;

  guestModalButton = false;
  locationModalButton = false;


    event : {
    
    title: string;
    organizer: string;
    organizerUid: string;
    eventType: string;
    phoneNumber: string;
    eventFormat: string;
    startDate: string;
    endDate: string;
    hashtags: string;
    posterUrl: string | null; // You would typically store the URL of the uploaded poster here
    selectedGuestsText: string;
    province: string;
    district: string;
    municipality: string;
    city: string;
    suburb: string;
    ward: string;
    documentId: string;
    onlineEventLink: string;
    AddressLine1: string;
    AddressLine2: string;
    eventDescription: string;
    edited: boolean;


  } = {
    title: '',
    organizer: '',
    organizerUid: '',
    eventType: '',
    phoneNumber: '',
    eventFormat: '',
    startDate: new Date().toISOString(), // Initialize with current date and time
    endDate: new Date().toISOString(),   // Initialize with current date and time  
    hashtags: '',
    posterUrl: null,
    selectedGuestsText: '',
    province: '',
    district: '',
    municipality: '',
    city: '',
    suburb: '',
    ward: '',
    documentId: '',
    onlineEventLink: '',
    AddressLine1: '',
    AddressLine2: '',
    eventDescription: '',
    edited: false,


  }


  myForm = new FormGroup({
    title: new FormControl ('', [Validators.required, Validators.maxLength(50)]),
    phoneNumber: new FormControl ('',  [Validators.required, Validators.maxLength(10), numericOnly,  validPhoneNumber]),
    eventType: new FormControl ('',  [Validators.required]),
    eventFormat: new FormControl ('',  [Validators.required]),
    hashtags: new FormControl ('',  [Validators.required]),
    selectedGuestsText: new FormControl ('',  [Validators.required]),
    posterUrl: new FormControl(null, [Validators.required, requiredFileSelected()]), // Example: Only allow jpg files
    onlineEventLink: new FormControl ('',),
   

  });

  


  minDate: string;


  constructor(
    private firestore: AngularFirestore, 
    private storage: AngularFireStorage,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private router: Router,
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private chatingService: ChatingService
  ) {
    this.minDate = new Date().toISOString(); // Set the minimum date to the current date and time

   }


   loginDetail(){
    this.event.title = '';
    this.event.organizer = '';
    this.event.organizerUid = '';
    this.event.eventType = ''; 
    this.event.phoneNumber = ''; 
    this.event.eventFormat = '';
    this.event.startDate = '';
    this.event.endDate = '';
    this.event.hashtags = '';
    this.event.posterUrl = '';
    this.event.selectedGuestsText = '';
    this.event.province = '';
    this.event.district = '';
    this.event.municipality = '';
    this.event.city = '';
    this.event.suburb = '';
    this.event.ward = '';
    this.event.documentId = '';
    this.event.onlineEventLink = '';
    this.event.AddressLine1 = '';
    this.event.AddressLine2 = '';
    this.event.eventDescription = '';
    
    console.log('Textboxes are now empty.')
    
  }

  // Handle file upload
  showFileInput(inputId: String) {
    if (inputId === 'fileInput') {
        this.fileInput.nativeElement.click();
      } 
    }

    async onFileChange(event: any, imgType: string) {
      const loading = await this.presentLoading();
      const file = event.target.files[0];
    
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

    async submitToEvents()
    {
      const loading = await this.presentLoading(); // Show loading popup

      if( this.event.eventFormat === 'Online Event'){
      if (this.myForm.valid  && this.event.onlineEventLink  !== '') {

        this.afAuth.authState.subscribe(async (user) => {
          if (user) {
            const organizerEmail = user.email || '';
            const organizerUid = await this.chatingService.getUIDFromEmail(organizerEmail);
    
            this.event.organizer = organizerEmail;
            

            this.event.selectedGuestsText = this.selectedGuestsText;
      
            // Generate a unique document ID
            const eventId = this.firestore.createId();
      
            // Add the document ID to the event data
            this.event.documentId = eventId;
            this.event.organizerUid = organizerUid;
      
            // Use the generated document ID to add the event data to Firestore
            this.firestore.collection('events').doc(eventId).set(this.event)
              .then(async () => {
                console.log('Event data before saving:', this.event);

                console.log('The event has been created successfully .');
          
                const toast = await this.toastController.create({
                  message: 'Event created successfully.',
                  duration: 2000,
                  position: 'bottom',
                  color: 'success',
                });
                toast.present();

                this.navigateToHome();
                return;

              })
              .catch((error: any) => {
                console.error('Error adding event to Firestore: ', error);
              });
          }
        });
      }
      else{
        console.log('Cannot create event. Please fill in all required fields and make sure you have selected the location and guest buttons.');
        //return;
  
        const toast = await this.toastController.create({
          message: 'Please make sure that all fields are selected.',
          duration: 2000,
          position: 'bottom',
          color: 'danger',
        });
        toast.present();
        return;
      }
    }
     else if(this.event.eventFormat === 'Venue'){

      if(this.myForm.valid && this.locationModalButton ){
        this.afAuth.authState.subscribe(async (user) => {
          if (user) {
            const organizerEmail = user.email || '';
            const organizerUid = await this.chatingService.getUIDFromEmail(organizerEmail);
    
            this.event.organizer = organizerEmail;
            this.event.organizerUid = organizerUid;
      
            this.event.selectedGuestsText = this.selectedGuestsText;
            
            this.event.province = this.selectedLocation?.selectedProvince?.name || '';
            this.event.district = this.selectedLocation?.selectedDistrict?.name || '';
            this.event.municipality = this.selectedLocation?.selectedMunicipality?.name || '';
            this.event.city = this.selectedLocation?.selectedCity?.names || '';
            this.event.suburb = this.selectedLocation?.selectedSurburb?.name || '';
            this.event.ward = this.selectedLocation?.selectedWard || '';
            this.event.AddressLine1 = this.selectedLocation?.AddressLine1;
            this.event.AddressLine2 = this.selectedLocation?.AddressLine2;

            const eventId = this.firestore.createId();
      
            // Add the document ID to the event data
            this.event.documentId = eventId;
      
            // Use the generated document ID to add the event data to Firestore
            this.firestore.collection('events').doc(eventId).set(this.event)
              .then(async () => {
                console.log('Event data before saving:', this.event);

                const toast = await this.toastController.create({
                  message: 'Event created successfully.',
                  duration: 2000,
                  position: 'bottom',
                  color: 'success',
                });
                toast.present();
                
                console.log('The event has been created successfully .');
                this.loginDetail();
                this.navigateToHome();
                return;
              })
              .catch((error: any) => {
                console.error('Error adding event to Firestore: ', error);
              });
          }
        
          });
      }
      else{
        console.log('Cannot create event. Please fill in all required fields and make sure you have selected the location and guest buttons.');
        //return;
  
        const toast = await this.toastController.create({
          message: 'Please make sure that all fields are selected.',
          duration: 2000,
          position: 'bottom',
          color: 'danger',
        });
        toast.present();
        return;         
       }
      }


      else if(this.event.eventFormat === 'Hybrid Event'){

        if(this.myForm.valid && this.locationModalButton && this.event.onlineEventLink  !== ''){
          this.afAuth.authState.subscribe(async (user) => {
            if (user) {
            const organizerEmail = user.email || '';
            const organizerUid = await this.chatingService.getUIDFromEmail(organizerEmail);
    
            this.event.organizer = organizerEmail;
            this.event.organizerUid = organizerUid;
        
              this.event.selectedGuestsText = this.selectedGuestsText;
              
              this.event.province = this.selectedLocation?.selectedProvince?.name || '';
              this.event.district = this.selectedLocation?.selectedDistrict?.name || '';
              this.event.municipality = this.selectedLocation?.selectedMunicipality?.name || '';
              this.event.city = this.selectedLocation?.selectedCity?.names || '';
              this.event.suburb = this.selectedLocation?.selectedSurburb?.name || '';
              this.event.ward = this.selectedLocation?.selectedWard || '';
              this.event.AddressLine1 = this.selectedLocation?.AddressLine1;
              this.event.AddressLine2 = this.selectedLocation?.AddressLine2;
  
              const eventId = this.firestore.createId();
        
              // Add the document ID to the event data
              this.event.documentId = eventId;
              this.event.organizerUid = organizerUid;
        
              // Use the generated document ID to add the event data to Firestore
              this.firestore.collection('events').doc(eventId).set(this.event)
                .then(async () => {
                  console.log('Event data before saving:', this.event);
  
                  const toast = await this.toastController.create({
                    message: 'Event created successfully.',
                    duration: 2000,
                    position: 'bottom',
                    color: 'success',
                  });
                  toast.present();
                  
                  console.log('The event has been created successfully .');
          
                  this.navigateToHome();
                  return;
                })
                .catch((error: any) => {
                  console.error('Error adding event to Firestore: ', error);
                });    
            }     
            });
        }
        else{
          console.log('Cannot create event. Please fill in all required fields and make sure you have selected the location and guest buttons.');
          //return;
    
          const toast = await this.toastController.create({
            message: 'Please make sure that all fields are selected.',
            duration: 2000,
            position: 'bottom',
            color: 'danger',
          });
          toast.present();
          return;            
        } 
        }    
        else{
          console.log('Cannot create event. Please fill in all required fields and make sure you have selected the location and guest buttons.');
              //return;
        
              const toast = await this.toastController.create({
                message: 'Please make sure that all fields are selected.',
                duration: 2000,
                position: 'bottom',
                color: 'danger',
              });
              toast.present();
              return;   
        }
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
  

    async submitForm() {

    this.submitToEvents();

    }
    

    
     async openModal() {
      const modal = await this.modalController.create({
        component: GuestListPage,
      });
      this.guestModalButton = true;
  
      modal.onDidDismiss().then((data) => {
        if (data.role === 'confirm') {
          const selectedGuests = data.data; // Access the selected artists
          console.log('Selected artists:', selectedGuests);
          this.selectedGuests = data.data;
          this.selectedGuestsText = this.selectedGuests.map((guests) => guests.StageName).join(', ');
          // Now, you can use the selectedGuests array in the create-event page
        }
      });
    
      return await modal.present();
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


    navigateToHome(){
      this.router.navigate(['/home-event-guest'])
    }
  


  ngOnInit() {
      // Assuming you have a Firestore collection called 'GueastEventorg'
    this.firestore
    .collection('GueastEventorg')
    .valueChanges() // Fetch the data as an observable
    .subscribe((guests) => {
      this.guests = guests as any[]; // Store the fetched data in your component
    });

    this.route.paramMap.subscribe(() => {
      if (window.history.state.data) {
        this.selectedLocation = window.history.state.data;
      }
    });
  }

}
