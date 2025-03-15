import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add this import
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './firebase.config';

import { AppComponent } from './app.component';
import { WebrtcComponent } from './webrtc/webrtc.component';
import { HomeComponent } from './home/home.component'; // Add this import
import { HeaderComponent } from './header/header.component'; // Add this import
import { FooterComponent } from './footer/footer.component'; // Add this import
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceEtudeComponent } from './components/service-etude/service-etude.component';
import { ServiceEtudeFormComponent } from './components/service-etude-form/service-etude-form.component';
import { ServiceEtudeDetailComponent } from './components/service-etude-detail/service-etude-detail.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AverageRatingPerTutorComponent } from './components/stat/average-rating-per-tutor/average-rating-per-tutor.component';
import { NumberOfSessionsPerTutorComponent } from './components/stat/number-of-sessions-per-tutor/number-of-sessions-per-tutor.component';
import { TotalHoursPerTutorComponent } from './components/stat/total-hours-per-tutor/total-hours-per-tutor.component';
import { MostPopularSubjectsComponent } from './components/stat/most-popular-subjects/most-popular-subjects.component';
import { BusiestTimesComponent } from './components/stat/busiest-times/busiest-times.component'; // Import FullCalendarModule


@NgModule({
  declarations: [
    AppComponent,
    WebrtcComponent,
    HomeComponent, // Add this line
    HeaderComponent, // Add this line
    FooterComponent, ServiceEtudeComponent, ServiceEtudeFormComponent, ServiceEtudeDetailComponent, CalendarComponent, AverageRatingPerTutorComponent, NumberOfSessionsPerTutorComponent, TotalHoursPerTutorComponent, MostPopularSubjectsComponent, BusiestTimesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add this line
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }