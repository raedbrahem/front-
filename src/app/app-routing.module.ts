import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebrtcComponent } from './webrtc/webrtc.component'; // Import the WebrtcComponent
import { HomeComponent } from './home/home.component'; // Import the HomeComponent (if you have one)
import { CommonModule } from '@angular/common';
import { ServiceEtudeComponent } from './components/service-etude/service-etude.component';
import { ServiceEtudeFormComponent } from './components/service-etude-form/service-etude-form.component';
import { ServiceEtudeDetailComponent } from './components/service-etude-detail/service-etude-detail.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'servicetude', component: ServiceEtudeComponent },
  { path: 'servicetude/new', component: ServiceEtudeFormComponent }, // For Adding
  { path: 'servicetude/edit/:id', component: ServiceEtudeFormComponent }, // For Editing
  { path: 'servicetude/:id', component: ServiceEtudeDetailComponent }, // For Viewing
  { path: 'webrtc', component: WebrtcComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
