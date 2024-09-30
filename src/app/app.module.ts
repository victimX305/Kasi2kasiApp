import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule,  } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebase from 'firebase/compat/app';
import {  FormsModule } from '@angular/forms';
import { getApp, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth, indexedDBLocalPersistence, initializeAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { Capacitor } from '@capacitor/core';
import { RouteReuseStrategy } from '@angular/router';
//import { ChatComponent } from 'src/app/components/chat/chat.component';
import { ChatsPageModule } from './pages/chats/chats.module';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from './chat.service';
import { OderByTheMostRecentPipePipe } from './oder-by-the-most-recent-pipe.pipe';
import { EventService } from './services/event-service.service';
import { SettingsPopoverComponent } from './pages/chating/chating.page';
import { CommonModule } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
//import { UserListComponent } from './components/user-list/user-list.component';

firebase.initializeApp(environment.firebaseConfig);

function configureFirebasePersistence(afAuth: AngularFireAuth) {
  return () => {
    return afAuth.setPersistence('local');
  }
}

@NgModule({
  declarations: [AppComponent, OderByTheMostRecentPipePipe, SettingsPopoverComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireModule,
    //ChatsPageModule,
    HttpClientModule,
    //ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
   // provideFirebaseApp(() => initializeApp({"projectId":"kasi-2-kasi2","appId":"1:132047856859:web:db04aca590f8a2f59ad8fe","databaseURL":"https://kasi-2-kasi2-default-rtdb.firebaseio.com","storageBucket":"kasi-2-kasi2.appspot.com","locationId":"us-central","apiKey":"AIzaSyAqqBAAVnc2_-lgLZQmhjGfyCPuQacwfKM","authDomain":"kasi-2-kasi2.firebaseapp.com","messagingSenderId":"132047856859"})),
   //provideFirebaseApp(() => initializeApp({"projectId":"kasi-2-kasi2","appId":"1:132047856859:web:822aa73d1b36024d9ad8fe","databaseURL":"https://kasi-2-kasi2-default-rtdb.firebaseio.com","storageBucket":"kasi-2-kasi2.appspot.com","locationId":"us-central","apiKey":"AIzaSyAqqBAAVnc2_-lgLZQmhjGfyCPuQacwfKM","authDomain":"kasi-2-kasi2.firebaseapp.com","messagingSenderId":"132047856859"}))
   /* provideAuth(() => {
      if(Capacitor.isNativePlatform())
      {
        return initializeAuth(getApp(), {
          persistence: indexedDBLocalPersistence
        })
      }
        else{
          return getAuth()
        }*
      
    }),*/
  ],
   // provideAuth(() => getAuth()),
   // provideFirestore(() => getFirestore()),  
  

  providers: [
    ChatService,
    EventService,
    {provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: configureFirebasePersistence,
      deps: [AngularFireAuth],
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}