import { Injectable } from '@angular/core';
import {Observable, observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { RequestMessage, Note } from '../modal/interfaces';
import { map, take } from 'rxjs/operators';
import firebase from 'firebase/app';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  uid = '';
  requestCollection: AngularFirestoreCollection<RequestMessage>;

  notes: Observable<Note[]>
  notesCollection: AngularFirestoreCollection<Note>
  notesDoc: AngularFirestoreDocument<Note>

  constructor(private afs: AngularFirestore) { 
    this.requestCollection = this.afs.collection('requests');
  }

  setUID(userID) {
    this.uid = userID;
  }

  getUID() {
    return this.uid;
  }

  loadNotes() {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    this.notesCollection = this.afs.collection<Note>('notes', ref => ref.where('uid', '==', uid));

    this.notes = this.notesCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log(data, id);
        return {id, ...data};
      });
    }));
  }

  getNotes(): Observable<Note[]> {
    return this.notes;
  }

  createRequest(requestMessage: RequestMessage) {
    return this.requestCollection.add(requestMessage);
  }

  createNote(note: Note): Promise<DocumentReference> {
    return this.notesCollection.add(note);
  }
}
