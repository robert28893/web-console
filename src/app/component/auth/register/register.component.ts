import {Component, OnInit} from '@angular/core';
import {Constants} from "../../../common/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  email: string = '';
  password: string = '';
  rePassword: string = '';
  isFormSubmitted: boolean = false;

  constructor(
    private router: Router
  ) {
  }

  routerLinkLogin() {
    return "/" + Constants.ROUTE_PATH.AUTH_LOGIN
  }

  ngOnInit(): void {
    if(localStorage.getItem(Constants.ACCESS_TOKEN)) {
      this.router.navigateByUrl(Constants.ROUTE_PATH.COMPETITION_LIST)
    }
  }

  register() {
    this.isFormSubmitted = true;
    //TODO: handle register
  }
}
