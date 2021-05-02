import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

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
}
