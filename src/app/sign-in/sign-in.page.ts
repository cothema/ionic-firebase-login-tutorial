import { Component, OnInit } from '@angular/core';
import { BaseAuthService } from 'ionic-universal-firebase-login';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(
    public auth: BaseAuthService
  ) { }

  ngOnInit() {
  }

}
