import { Injectable } from '@angular/core';
import {Observable, observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { RequestMessage } from '../modal/interfaces';
import firebase from 'firebase/app';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  uid = '';
  requestCollection: AngularFirestoreCollection<RequestMessage>;

  constructor(private afs: AngularFirestore) { 
    this.requestCollection = this.afs.collection('requests');
  }

  setUID(userID) {
    this.uid = userID;
  }

  getUID() {
    return this.uid;
  }

  createRequest(requestMessage: RequestMessage) {
    return this.requestCollection.add(requestMessage);
  }

}
