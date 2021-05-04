import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseService} from '../app/services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  hideMe = true;

  constructor(private router: Router,
              private platform: Platform,
              public fbService: FirebaseService,
              public angularFire: AngularFireAuth,
              public fireBase: AngularFirestore) { this.initializeApp(); }

  initializeApp() {
    this.platform.ready().then(() => {
      var database = this.fireBase
    })
  }

  ionWillOpen() {
    console.log('test');
    this.hideMe = this.fbService.uid !== '';
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.angularFire.signOut().then(() => {
      var usr = this.angularFire.currentUser;
      console.log('Current user (logout invoked): ', usr);
      this.fbService.setUID('');
      this.router.navigate(['/login'])
    });
  }
}
