import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebrtcComponent } from './webrtc/webrtc.component'; // Import the WebrtcComponent
import { HomeComponent } from './home/home.component'; // Import the HomeComponent (if you have one)

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (optional)
  { path: 'webrtc', component: WebrtcComponent }, // Route for WebrtcComponent
  { path: '**', redirectTo: '' } // Redirect to home for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }