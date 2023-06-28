import { Component } from '@angular/core';
import {Constants} from "../../common/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router
  ) {
  }

  login() {
    console.log("username: " + this.username + ", password: " + this.password)
    localStorage.setItem(Constants.ACCESS_TOKEN, "accessToken")
    localStorage.setItem(Constants.ACCOUNT_INFO, JSON.stringify({"fullName": "fullName1"}))
    this.router.navigateByUrl(Constants.ROUTE_PATH.COMPETITION_LIST)
  }
}
