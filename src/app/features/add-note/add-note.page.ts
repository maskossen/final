import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Note } from '../../modal/interfaces';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {

  new_note_form: FormGroup;
  user: any;
  newNote: Note = {
    uid: '',
    username: '',
    title: '',
    content: ''
  }


  constructor(private router: Router,
              private fbService: FirebaseService,
              public afAuth: AngularFireAuth,
              public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        console.log('Note Error!');
      }
    });

    this.new_note_form = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.user === null) {
      this.router.navigate(['/login']);
      return;
    }

    if (this.newNote.title !== '' && this.newNote.content !== '') {
      this.newNote.uid = this.user.uid;
      // this.newNote.username = this.user.username;
      this.fbService.createNote(this.newNote).then((doc) => {
        this.newNote.title = '';
        this.newNote.content = '';
        this.newNote.uid = '';
      this.newNote.username = '';
      }, err => {});
    }
  }

}
