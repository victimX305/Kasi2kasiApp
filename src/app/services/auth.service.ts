import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _uid = new BehaviorSubject<any>(null);
  currentUser: any;
  //signupForm: FormGroup | any;
  isTypePassword: boolean = true;
  isLoading: boolean = false;
  isEventOrganizer: boolean = false;
  isGuest: boolean = false;
  registrationType: string = '';

  constructor(
              private fireAuth: Auth,
              private apiService: ApiService,
              private firestore: AngularFirestore,
              private router: Router,
              private afAuth: AngularFireAuth
            ) { }

              addData(data: any) {
                return this.firestore.collection('users').add(data);
              }

  async login(email: string, password: string): Promise<any> {
    try{
      const response = await signInWithEmailAndPassword(this.fireAuth, email, password);
      console.log(response);
      if(response?.user)
      {
        this.setUserData(response.user.uid);

      }
      
    }
    catch(e)
    {
      throw(e);
    }
  }
  getId() {
    const auth = getAuth();
    this.currentUser = auth.currentUser;
    console.log(this.currentUser);
    return this.currentUser?.uid;
  }
  setUserData(uid)
  {
    this._uid.next(uid);
  }
  randomIntFromInterval(min, max)
  {
    return Math.floor(Math.random() * (max-min + 1) + min);
  }
  updateRegistrationType() {
    this.isEventOrganizer = this.registrationType === 'partner';
    console.log('isEventOrganizer:', this.isEventOrganizer);
    this.isGuest = this.registrationType === 'guest';
    console.log('isGuest:', this.isGuest);
  } 

  async register(formValue) {
    try {
      const registeredUser = await createUserWithEmailAndPassword(this.fireAuth, formValue.email, formValue.password);
  
      console.log('registered user: ', registeredUser);
  
      const data = {
        email: formValue.email,
        fullname: formValue.username,
        phoneNumber: formValue.phoneNumber,
        password: formValue.password,
        province: formValue.province,
        registrationType: formValue.registrationType,
        uid: registeredUser.user.uid,
        photo: 'https://i.pravatar.cc/' + this.randomIntFromInterval(200, 400)
      };
  
      await this.apiService.setDocuments(`users/${registeredUser.user.uid}`, data);
  
      const userData = {
        id: registeredUser.user.uid
      };
  
  
      return userData;
    } catch (e) {
      throw e;
    }
  }
  

  getData()
  {
    this
  }
  
  async logout() {
    try{
      await this.fireAuth.signOut();
      this._uid.next(null);
      this.currentUser = null;
      return true;
    }
    catch(e)
    {
      throw(e);
    }
  }
  checkAuth(): Promise<any>{
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.fireAuth, user => {
        console.log('auth user: ', user);
        resolve(user)
      });
    });
  }

  async getUserData(id)
  {
    const docSnap: any = await this.apiService.getDocById('users/${id}');
    if(docSnap?.exists())
    {
      return docSnap.data();

    }else{
      throw('No such documnet exists');
    }
  }

    // Method to get the UID of the logged-in user
    getLoggedInUid(): Observable<string | null> {
      return this.afAuth.authState.pipe(
        map(user => user ? user.uid : null)
      );
    }
  
}
