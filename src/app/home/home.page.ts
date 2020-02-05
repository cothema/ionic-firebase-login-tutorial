import { Component } from '@angular/core';
import { BaseAuthService } from 'ionic-universal-firebase-login';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public auth: BaseAuthService
  ) {}

  getTokenClick(){
    let wholeFirebaseUser = this.auth.currentFirebaseUser;
    console.log("wholeUser: ", wholeFirebaseUser);

    this.auth.currentFirebaseUser.getIdTokenResult().then(tokenResult =>{
      console.log("tokenResult: ", tokenResult);
      console.log("token: ", tokenResult.token); // You can use this token if you want to verify user on your API server.
    })
  }

}
