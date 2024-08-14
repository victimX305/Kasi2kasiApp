import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable()
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  // Function to send a message to Firestore
  sendMessage(email: string, message: string, fullname: string) {
    return this.firestore.collection('help').add({ email, message, fullname});
  }
}
