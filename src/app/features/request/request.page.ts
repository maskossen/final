import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { RequestMessage } from '../../modal/interfaces';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  new_request_form: FormGroup;
  user: any;
  requestMessage: RequestMessage = {
    uid: '',
    description: '',
    title: '',
    email: ''
  };

  constructor(private router: Router,
              private fbService: FirebaseService,
              public afAuth: AngularFireAuth,
              public formBuilder: FormBuilder,
              public alertController: AlertController) { }

  ngOnInit() {
    this.new_request_form = this.formBuilder.group({
      title: ['', [Validators.required]],
      // rDescription: new FormControl(null, Validators.required) 
      rDescription: ['', [Validators.required]]
    });

    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        console.log('User success!');
        this.user = user;
      } else {
        console.log('Error!');
      }
    });
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  addNewRequest(value) {

    if (this.user === null) {
      this.router.navigate(['/login']);
      return;
    }

    this.requestMessage.uid = this.user.uid;
    this.requestMessage.email = this.user.email;
    this.requestMessage.title = value.title;
    this.requestMessage.description = value.rDescription;

    this.new_request_form.reset();

    this.fbService.createRequest(this.requestMessage).then((doc) => {
      this.router.navigate(['/home']);
    }, err => {
    });
  }

  onSubmit() {
    if (this.user === null) {
      this.router.navigate(['/login']);
      return;
    }

    if (this.requestMessage.title !== '' && this.requestMessage.description !== '') {
      this.requestMessage.uid = this.user.uid;
      this.requestMessage.email = this.user.email;
      this.fbService.createRequest(this.requestMessage).then((doc) => {
        this.requestMessage.title = '';
        this.requestMessage.description = '';
        this.presentAlert();
        this.router.navigate(['/home']);
      }, err => {
      });
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Success!',
      message: 'Your request was sent!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
