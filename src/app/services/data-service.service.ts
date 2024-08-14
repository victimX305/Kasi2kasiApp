import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private firestore: AngularFirestore) {}
    
    addData(data: any) {
      return this.firestore.collection('chatRooms').add(data);
    }
   
}
