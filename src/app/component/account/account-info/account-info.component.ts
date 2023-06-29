import {Component, OnInit} from '@angular/core';
import {Constants} from "../../../common/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  accountInfo: any

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.accountInfo = JSON.parse(localStorage.getItem(Constants.ACCOUNT_INFO) || '{}');
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl(Constants.ROUTE_PATH.AUTH_LOGIN);
  }
}
