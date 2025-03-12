import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, onSnapshot, updateDoc, getDoc } from '@angular/fire/firestore';

interface CallData {
  offer?: RTCSessionDescriptionInit;
  answer?: RTCSessionDescriptionInit;
}

@Injectable({
  providedIn: 'root'
})
export class WebRTCService {
  private pc: RTCPeerConnection | null = null;
  private localStream: MediaStream | null = null;
  private remoteStream: MediaStream | null = null;

  constructor(private firestore: Firestore) {
    const servers = {
      iceServers: [
        {
          urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
        },
      ],
      iceCandidatePoolSize: 10,
    };
    this.pc = new RTCPeerConnection(servers);
  }

  async startWebcam(): Promise<MediaStream> {
    // Close any existing connection
    if (this.pc) {
      this.pc.close();
      this.pc = null;
    }
  
    // Create a new RTCPeerConnection
    const servers = {
      iceServers: [
        { urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'] },
      ],
      iceCandidatePoolSize: 10,
    };
    this.pc = new RTCPeerConnection(servers);
  
    // Get the local stream
    this.localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    this.remoteStream = new MediaStream();
  
    // Add tracks to the new RTCPeerConnection
    this.localStream.getTracks().forEach((track) => {
      this.pc!.addTrack(track, this.localStream!); // Use non-null assertion operator
    });
  
    // Handle remote tracks
    this.pc.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        this.remoteStream!.addTrack(track);
      });
  
      // Update the remote video element
      const remoteVideo = document.getElementById('remoteVideo') as HTMLVideoElement;
      if (remoteVideo) {
        remoteVideo.srcObject = this.remoteStream;
      }
    };
  
    return this.localStream;
  }

  async createOffer(): Promise<string> {
    if (!this.pc) {
      throw new Error('RTCPeerConnection is not initialized.');
    }
  
    const callDoc = doc(collection(this.firestore, 'calls'));
    const offerCandidates = collection(callDoc, 'offerCandidates');
    const answerCandidates = collection(callDoc, 'answerCandidates');
  
    this.pc.onicecandidate = (event) => {
      if (event.candidate) {
        const candidateDoc = doc(offerCandidates);
        setDoc(candidateDoc, event.candidate.toJSON());
      }
    };
  
    const offerDescription = await this.pc.createOffer();
    await this.pc.setLocalDescription(offerDescription);
  
    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };
  
    await setDoc(callDoc, { offer });
  
    onSnapshot(callDoc, (snapshot) => {
      const data = snapshot.data() as CallData;
      if (!this.pc!.currentRemoteDescription && data?.answer) { // Use non-null assertion operator
        const answerDescription = new RTCSessionDescription(data.answer);
        this.pc!.setRemoteDescription(answerDescription); // Use non-null assertion operator
      }
    });
  
    onSnapshot(answerCandidates, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const candidate = new RTCIceCandidate(change.doc.data());
          this.pc!.addIceCandidate(candidate); // Use non-null assertion operator
        }
      });
    });
  
    return callDoc.id;
  }

  async answerCall(callId: string): Promise<void> {
    if (!this.pc) {
      throw new Error('RTCPeerConnection is not initialized.');
    }
  
    const callDoc = doc(this.firestore, 'calls', callId);
    const answerCandidates = collection(callDoc, 'answerCandidates');
    const offerCandidates = collection(callDoc, 'offerCandidates');
  
    this.pc.onicecandidate = (event) => {
      if (event.candidate) {
        const candidateDoc = doc(answerCandidates);
        setDoc(candidateDoc, event.candidate.toJSON());
      }
    };
  
    const callData = (await getDoc(callDoc)).data() as CallData;
    const offerDescription = callData.offer;
  
    if (!offerDescription) {
      throw new Error('No offer found in the call document.');
    }
  
    await this.pc.setRemoteDescription(new RTCSessionDescription(offerDescription));
  
    const answerDescription = await this.pc.createAnswer();
    await this.pc.setLocalDescription(answerDescription);
  
    const answer = {
      type: answerDescription.type,
      sdp: answerDescription.sdp,
    };
  
    await updateDoc(callDoc, { answer });
  
    onSnapshot(offerCandidates, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const data = change.doc.data();
          this.pc!.addIceCandidate(new RTCIceCandidate(data)); // Use non-null assertion operator
        }
      });
    });
  }
  

  getLocalStream(): MediaStream | null {
    return this.localStream;
  }

  getRemoteStream(): MediaStream | null {
    return this.remoteStream;
  }

  hangup(): void {
    if (this.pc) {
      this.pc.close(); // Close the existing connection
      this.pc = null; // Reset the RTCPeerConnection
    }
    this.localStream?.getTracks().forEach(track => track.stop());
    this.remoteStream?.getTracks().forEach(track => track.stop());
    this.localStream = null;
    this.remoteStream = null;
  }
}