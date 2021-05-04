import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any;
  username: any;

  constructor(private router: Router,
              private fbService: FirebaseService,
              private afs: AngularFirestore,
              public afAuth: AngularFireAuth) { }

  ngOnInit() {

    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        console.log('Error!');
      }
    });

  }

  goToUserSearch() {
    this.router.navigate(['/user-search']);
  }

}
