import { Injectable } from '@angular/core';
import {Observable, observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { RequestMessage, Note, User } from '../modal/interfaces';
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

  users: Observable<User[]>
  usersCollection: AngularFirestoreCollection<User>
  usersDoc: AngularFirestoreDocument<User>

  constructor(private afs: AngularFirestore) { 
    this.requestCollection = this.afs.collection('requests');

    this.usersCollection = this.afs.collection('users');
    this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        console.log(data, id);
        return {id, ...data};
      });
    }));
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

  getUsers(): Observable<User[]> {
    return this.users;
  }

  getUser(id: string): Observable<User> {
    return this.usersCollection.doc<User>(id).valueChanges().pipe(take(1),
      map(user => {
        user.uid = id;
        return user;
      }))
  }

}
