import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  constructor(private firestore: AngularFirestore) {}
  
  getGuests(): Observable<any[]> {
    return this.firestore.collection('Guests').valueChanges();
  }

  //Registration Phase
  private userDataB: any;

  setUserDataB(data: any) {
    this.userDataB = data;
  }

  getUserDataB() {
    return this.userDataB;
  }
}
