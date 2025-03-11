import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this import
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './firebase.config';

import { AppComponent } from './app.component';
import { WebrtcComponent } from './webrtc/webrtc.component';
import { HomeComponent } from './home/home.component'; // Add this import
import { HeaderComponent } from './header/header.component'; // Add this import
import { FooterComponent } from './footer/footer.component'; // Add this import
@NgModule({
  declarations: [
    AppComponent,
    WebrtcComponent,
    HomeComponent, // Add this line
    HeaderComponent, // Add this line
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add this line
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }