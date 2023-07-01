import {Component, OnInit} from '@angular/core';
import {Constants} from "../../../common/constants";
import {StorageService} from "../../../service/storage/storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed: boolean = true;

  constructor(
    private storageService: StorageService,
  ) {
  }

  ngOnInit(): void {
    console.log('init navbar')
  }

  isShow() {
    return !!this.storageService.getAccessToken();
  }

  routeLinkCompetitionList() {
    return "/" + Constants.ROUTE_PATH.COMPETITION;
  }

}
