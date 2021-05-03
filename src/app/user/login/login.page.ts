import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {email: '', password: ''};

  constructor(private router: Router,
              public fbService: FirebaseService,
              public fireBase: AngularFirestore,
              public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  emailLogin(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then(user => {
      //TODO add loading stuff here

      var aUser = firebase.auth().currentUser;
      this.fbService.setUID(user.user.uid);
      var db = firebase.firestore();
      var self = this;

      db.collection('users').where('uid', '==', aUser.uid).get().then(
        function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log(doc.id, '=>', doc.data());
            //TODO See if anything needs to go here
          });
          self.router.navigate(['/home']);
        }).catch(error => {
          console.log('Not signed');
          console.log(error);
        });
    });
  }

  googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    var self = this;

    firebase.auth().signInWithPopup(provider).then((result) => {
      var credential = result.credential;
      var user = result.user;

      console.log(user);

      self.fbService.setUID(user.uid);
      this.router.navigateByUrl('/');
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  signup() {
    this.router.navigate(['/signup']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
