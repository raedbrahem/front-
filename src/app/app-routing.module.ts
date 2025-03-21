import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebrtcComponent } from './webrtc/webrtc.component'; // Import the WebrtcComponent
import { HomeComponent } from './home/home.component'; // Import the HomeComponent (if you have one)
import { CommonModule } from '@angular/common';
import { ServiceEtudeComponent } from './components/service-etude/service-etude.component';
import { ServiceEtudeFormComponent } from './components/service-etude-form/service-etude-form.component';
import { ServiceEtudeDetailComponent } from './components/service-etude-detail/service-etude-detail.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RatingListComponent } from './components/rating/rating-list/rating-list.component';
import { RatingFormComponent } from './components/rating/rating-form/rating-form.component';
import { CommentaireListComponent } from './components/commentaire/commentaire-list/commentaire-list.component';
import { CommentaireFormComponent } from './components/commentaire/commentaire-form/commentaire-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'servicetude', component: ServiceEtudeComponent },
  { path: 'servicetude/new', component: ServiceEtudeFormComponent }, // For Adding
  { path: 'servicetude/edit/:id', component: ServiceEtudeFormComponent }, // For Editing
  { path: 'servicetude/:id', component: ServiceEtudeDetailComponent }, // For Viewing
  { path: 'ratings', component: RatingListComponent },
  { path: 'ratings/edit/:id', component: RatingFormComponent },
  { path: 'webrtc', component: WebrtcComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'ratings/new', component: RatingFormComponent }, // Route to add a new rating
  { path: 'commentaires', component: CommentaireListComponent },
  { path: 'commentaires/add', component: CommentaireFormComponent },
  { path: 'commentaires/edit/:id', component: CommentaireFormComponent },
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
