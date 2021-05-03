import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loggedIn = false;

  constructor(private router: Router,
              public fbService: FirebaseService) {}

  ionViewWillEnter() {
    console.log('UID: ', this.fbService.uid);
    this.loggedIn = this.fbService.uid !== '';
  }

  goToRegEx() {
    this.router.navigate(['/regex']);
  }

  goToCpp() {
    this.router.navigate(['/cpp']);
  }

  goToPython() {
    this.router.navigate(['/python']);
  }

  goToComplexities() {
    this.router.navigate(['/complexities']);
  }

  logIn() {
    this.router.navigate(['/login']);
  }


}
