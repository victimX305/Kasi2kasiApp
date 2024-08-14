import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  internetStatus: boolean = true; // Flag to track internet status


  constructor(
    private router: Router
  ) { }

  navigateToAdminVerification() {
    this.router.navigate(['/verify'])
  }

  navigateToGuestVerification() {
    this.router.navigate(['/verify-guest'])
  }
 
  navigateToGuestEventVerification() {
    this.router.navigate(['/verify-guest-event'])
  }

  navigateToHelpMessage() {
    this.router.navigate(['/help-v'])
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
