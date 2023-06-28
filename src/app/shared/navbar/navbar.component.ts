import {Component, OnInit} from '@angular/core';
import {Constants} from "../../common/constants";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  isShow() {
    return !!localStorage.getItem(Constants.ACCESS_TOKEN);
  }

  routeLinkCompetitionList() {
    return Constants.ROUTE_PATH.COMPETITION_LIST;
  }

}
