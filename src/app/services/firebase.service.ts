import { Injectable } from '@angular/core';
import {Observable, observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  uid = '';

  constructor(private afs: AngularFirestore) { }

  setUID(userID) {
    this.uid = userID;
  }
}
