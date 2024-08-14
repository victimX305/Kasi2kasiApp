import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class GuestRegService {
    private userData: any;


    constructor() {
      // Initialize userData as an empty object when the service is created.
      this.userData = {};
    }

    // Set user data in the service
    setUserData(data: any) {
      this.userData = data;
    }

    // Get user data from the service
    getUserData() {
    return this.userData;
    }
     
    // Clear user data from the service
    clearUserData() {
      this.userData = {};
    }
}