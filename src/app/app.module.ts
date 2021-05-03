import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';

const firebaseConfig = {
    apiKey: "AIzaSyBERw95z-MtIleL9DJbav5IfVzzYqGDqG8",
    authDomain: "cheat-sheet-1228b.firebaseapp.com",
    projectId: "cheat-sheet-1228b",
    storageBucket: "cheat-sheet-1228b.appspot.com",
    messagingSenderId: "93996600131",
    appId: "1:93996600131:web:50aef3a717b69b3e6dfdf6",
    measurementId: "G-W0FV3KN6EL"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
