import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserCredential } from '@firebase/auth-types';
import { getAuth } from 'firebase/auth';
import { Observable } from 'rxjs';
//import { CustomUser } from './prof-user/user.model';
//import { UserService } from './prof-user/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userData: any;
  private userRegistrationType: string | undefined;
  user: Observable<firebase.default.User | null>;
  currentUser: any;





  constructor(private afAuth: AngularFireAuth) { 
    this.user = afAuth.authState; 
  }
  getId() {
    const auth = getAuth();
    this.currentUser = auth.currentUser;
    console.log(this.currentUser);
    return this.currentUser?.uid;
  }

    setUserRegistrationType(registrationType: string) {
    this.userRegistrationType = registrationType;
  }

  // This method retrieves the user's registration type.
  getUserRegistrationType(): string | undefined {
    return this.userRegistrationType;
  }

  async loginWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    try {
      console.log('Attempting Firebase login...');
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email,password);
      console.log('Firebase login successful:', userCredential.user);
      return userCredential;
    } catch (error: any) {
      console.error('Firebase login error:', error);
      if (error.code === 'auth/wrong-password') {
        throw new Error('Invalid password');
      } else if (error.code === 'auth/user-not-found') {
        throw new Error('User not found');
      } else {
        throw error;
      }
    
    }
  }

  async onDeleteEmail(email: string, password: string) {
  }

  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

  async logout() {
    await this.afAuth.signOut();
  }
  getAuthenticatedUser() {
    return this.afAuth.authState;
  }
 
 
}
