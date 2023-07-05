import {Component, OnDestroy, OnInit} from '@angular/core';
import {Constants} from "../../../common/constants";
import {Router} from "@angular/router";
import {EventService} from "../../../service/event/event.service";
import {Subscription} from "rxjs";
import {StorageService} from "../../../service/storage/storage.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AccountProfileModalComponent} from "../account-profile-modal/account-profile-modal.component";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit, OnDestroy {
  private profileEventSub: Subscription
  accountInfo: any = {}

  constructor(
    private router: Router,
    private eventService: EventService,
    private storageService: StorageService,
    private modalService: NgbModal,
  ) {
    console.log('constructor account-info')
    this.profileEventSub = eventService.getProfileEvent().subscribe(() => {
      console.log('catch profile event')
      this.accountInfo = this.storageService.getAccountInfo();
    })
  }

  ngOnInit(): void {
    console.log("init account-info")
    this.accountInfo = this.storageService.getAccountInfo();
  }

  logout(): void {
    this.storageService.clear();
    this.router.navigateByUrl(Constants.ROUTE_PATH.AUTH_LOGIN);
  }

  openProfileModal(): void {
    const modalRef = this.modalService.open(AccountProfileModalComponent);
    modalRef.componentInstance.accountInfo = this.accountInfo;
  }

  ngOnDestroy(): void {
    this.profileEventSub.unsubscribe();
  }

  // ngAfterContentInit(): void {
  //   this.accountInfo = JSON.parse(localStorage.getItem(Constants.ACCOUNT_INFO) || '{}');
  // }
  //
  // ngAfterViewInit(): void {
  //   this.accountInfo = JSON.parse(localStorage.getItem(Constants.ACCOUNT_INFO) || '{}');
  // }

  // ngDoCheck(): void {
  //   this.accountInfo = JSON.parse(localStorage.getItem(Constants.ACCOUNT_INFO) || '{}');
  // }


}
