import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.page.html',
  styleUrls: ['./user-search.page.scss'],
})
export class UserSearchPage implements OnInit {

  public userList: any;

  constructor(private firestore: AngularFirestore,
              private router: Router) { }

  async ngOnInit() {
    this.userList = await this.initializeUsers();
    console.log(this.userList);
  }

  async initializeUsers(): Promise<any> {
    const userList = await this.firestore.collection('users').valueChanges().pipe(first()).toPromise();
    return userList;
  }

  async filterList(evt) {
    this.userList = await this.initializeUsers();
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) return;

    this.userList = this.userList.filter(currentUser => {
      if (currentUser.username && searchTerm) {
        return (currentUser.username.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 
          || currentUser.email.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    })
  }

  goToUser(user) {
    this.router.navigate(['./view-users-notes', user]);
  }
}
