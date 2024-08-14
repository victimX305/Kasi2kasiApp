import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  private userDataB: any;

  constructor(private firestore: AngularFirestore) {}

  clearUserData() {
    // Implementation to clear user data
    this.userDataB = null; // Clear the stored user data
    // Add any other logic if necessary to clear user data
  }

  getGuests(): Observable<any[]> {
    return this.firestore.collection('Guests').valueChanges();
  }

  getEventguest(): Observable<any[]> {
    return this.firestore.collection('GueastEventorg').valueChanges();
  }

  setUserDataB(data: any) {
    this.userDataB = data;
  }

  getUserDataB() {
    return this.userDataB;
  }
}