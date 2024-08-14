import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-guest-reg',
  templateUrl: './guest-reg.page.html',
  styleUrls: ['./guest-reg.page.scss'],
})
export class GuestRegPage implements OnInit {

  guestForm = new FormGroup({
    idNumber: new FormControl('', [Validators.required]),
    stageName: new FormControl('', [Validators.required]),
    artistType: new FormControl('', [Validators.required]),
    socialMediaLink: new FormControl('', [Validators.required]),
    youtubeLink: new FormControl('', [Validators.required]),
  });

  userData: any; // Assuming this will hold the user data from the registration page

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    // Retrieve data passed from the registration page
    this.route?.queryParamMap.subscribe((params) => {
      this.userData = { id: params.get('uid') }; // Adjust this based on how your data is passed
    });
  }
  async addGuestInformation() {
    if (this.guestForm.valid) {
      const guestData = {
        idNumber: this.guestForm.get('idNumber')?.value,
        stageName: this.guestForm.get('stageName')?.value,
        artistType: this.guestForm.get('artistType')?.value,
        socialMediaLink: this.guestForm.get('socialMediaLink')?.value,
        youtubeLink: this.guestForm.get('youtubeLink')?.value,
      };

      // Combine guest data with user data from registration page
      const combinedData = { ...this.userData, ...guestData };

      // Perform any additional actions or validations before saving to the database
      // ...

      // Save combined data to the database using ApiService
      await this.apiService.setDocuments(`Guests/${this.userData.uid}`, combinedData);

      console.log('Guest information added successfully:', combinedData);

      // You can navigate to another page or perform additional actions after saving
      this.router.navigateByUrl('/some-other-page');
    } else {
      console.log('Please fill in all required fields in the guest form.');
    }
  }

}
