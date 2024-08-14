// user.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  setUserDataB(UserDataB: { fullname: any; email: any; phonenumber: any; password: any; registrationType: any; province: any; photo: string; }) {
    throw new Error('Method not implemented.');
  }
  private currentUser: firebase.default.User | null = null;
  authState: Observable<firebase.default.User | null>;


  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    ){
      this.authState = this.afAuth.authState;

    this.authState.subscribe((user) => {
      this.currentUser = user;
    });
    }



  getCurrentUser(): firebase.default.User | null {
    return this.currentUser;
  }

  setCurrentUser(user: firebase.default.User) {
    this.currentUser = user;
  }

  updateUser(userId: string, updatedUserData: any) {
    const userRef = this.firestore.collection('EventOrganizers').doc(userId);

    return userRef.update(updatedUserData)
  }
}
