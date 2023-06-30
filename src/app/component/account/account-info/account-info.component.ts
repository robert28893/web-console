import {AfterContentInit, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {Constants} from "../../../common/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements DoCheck {
  accountInfo: any

  constructor(
    private router: Router,
  ) {
  }

  // ngOnInit(): void {
  //   this.accountInfo = JSON.parse(localStorage.getItem(Constants.ACCOUNT_INFO) || '{}');
  // }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl(Constants.ROUTE_PATH.AUTH_LOGIN);
  }

  // ngAfterContentInit(): void {
  //   this.accountInfo = JSON.parse(localStorage.getItem(Constants.ACCOUNT_INFO) || '{}');
  // }
  //
  // ngAfterViewInit(): void {
  //   this.accountInfo = JSON.parse(localStorage.getItem(Constants.ACCOUNT_INFO) || '{}');
  // }

  ngDoCheck(): void {
    this.accountInfo = JSON.parse(localStorage.getItem(Constants.ACCOUNT_INFO) || '{}');
  }
}
