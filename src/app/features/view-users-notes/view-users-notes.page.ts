import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-view-users-notes',
  templateUrl: './view-users-notes.page.html',
  styleUrls: ['./view-users-notes.page.scss'],
})
export class ViewUsersNotesPage implements OnInit {

  public notesList: any;
  filteredList: any;
  user;

  constructor(private firestore: AngularFirestore,
              private route: ActivatedRoute) { }

  async ngOnInit() {
    this.route.params.subscribe(param => {
      this.user = param;
    });

    this.notesList = await this.initializeNotes();
    console.log(this.notesList);
    this.filterList();
  }

  async initializeNotes(): Promise<any> {
    const notesList = await this.firestore.collection('notes').valueChanges().pipe(first()).toPromise();
    return notesList;
  }

  filterList() {
    this.notesList = this.notesList.filter(currentUser => {
      if (currentUser.uid && this.user.uid) {
        return (currentUser.uid.indexOf(this.user.uid) > -1);
      }
    })
  }

}
