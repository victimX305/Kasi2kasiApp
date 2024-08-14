// admin-message.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminMessageService {
  constructor(private firestore: AngularFirestore) {}

  // Method to get the admin message from Firestore
  getAdminMessage(): Observable<string> {
    // Replace 'adminMessageCollection' with your actual Firestore collection name
    return this.firestore
      .collection('feedback')
      .doc('adminMessageDoc') // Replace with your actual document ID
      .valueChanges()
      .pipe(map((data: any) => data.message));
  }
}
