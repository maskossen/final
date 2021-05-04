import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Note } from '../../modal/interfaces'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  notes: Observable<Note[]>;
  uid = '';
  

  constructor(private router: Router,
              public fbService: FirebaseService,
              public angularFire: AngularFireAuth,
              private afs: AngularFirestore) {
    this.uid = fbService.uid;
  }

  ngOnInit() {
    this.notes = this.fbService.getNotes();
  }

  createNote() {
    this.router.navigate(['/add-note']);
  }

}
