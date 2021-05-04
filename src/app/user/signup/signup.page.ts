import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'
import {AngularFireAuth} from '@angular/fire/auth';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';
import firebase from 'firebase/app';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user = {email: '', pass: '', username: ''};

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              public fbService: FirebaseService,
              public alertController: AlertController) { }

  ngOnInit() {
  }

  emailSignup(email: string, password: string, userName: string) {

    this.afAuth.createUserWithEmailAndPassword(email, password).then(user => {
      const db = firebase.firestore();
      db.collection('users').add({
          uid: user.user.uid,
          email: this.user.email,
          password: this.user.pass,
          username: this.user.username,
          postIDs: [],
          friends: []
        }).then(docRef => {
          console.log('Usertype written with ID: ', docRef.id);
        }).catch(error => {
          console.log('Error adding document: ', error);
        });
      });

    this.router.navigateByUrl('/');

  }

  async checkForUserName(username: string): Promise<boolean> {
    const db = firebase.firestore();
    var docRef = db.collection('usernames').doc(username);
    var result;

    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log('Username is taken');
        result = false;
      } else {
        result = true;
      }
    });
    return await result;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'This username is already taken!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
