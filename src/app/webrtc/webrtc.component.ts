import { Component } from '@angular/core';
import { WebRTCService } from '../services/webrtc.service';

@Component({
  selector: 'app-webrtc',
  templateUrl: './webrtc.component.html',
  styleUrls: ['./webrtc.component.css']
})
export class WebrtcComponent {
  callInput: string = ''; // For storing the call ID
  errorMessage: string = ''; // For displaying errors
  loading: boolean = false; // For showing a loading state

  constructor(private webRTCService: WebRTCService) {}

  // Start the webcam and display the local video stream
  async startWebcam() {
    this.loading = true;
    this.errorMessage = '';
    try {
      const localStream = await this.webRTCService.startWebcam();
      const localVideo = document.getElementById('webcamVideo') as HTMLVideoElement;
      localVideo.srcObject = localStream;
    } catch (error) {
      this.errorMessage = error instanceof Error ? error.message : 'Failed to start webcam.';
    } finally {
      this.loading = false;
    }
  }

  // Create a new call and generate a call ID
  async createCall() {
    this.loading = true;
    this.errorMessage = '';
    try {
      const callId = await this.webRTCService.createOffer();
      this.callInput = callId; // Display the call ID in the input field
    } catch (error) {
      this.errorMessage = error instanceof Error ? error.message : 'Failed to create call.';
    } finally {
      this.loading = false;
    }
  }

  // Answer a call using the call ID
  async answerCall() {
    this.loading = true;
    this.errorMessage = '';
    try {
      await this.webRTCService.answerCall(this.callInput);
      const remoteVideo = document.getElementById('remoteVideo') as HTMLVideoElement;
      remoteVideo.srcObject = this.webRTCService.getRemoteStream();
    } catch (error) {
      this.errorMessage = error instanceof Error ? error.message : 'Failed to answer call.';
    } finally {
      this.loading = false;
    }
  }

  // Hang up the call
  hangup() {
    this.webRTCService.hangup();
    const localVideo = document.getElementById('webcamVideo') as HTMLVideoElement;
    const remoteVideo = document.getElementById('remoteVideo') as HTMLVideoElement;
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
  }
}