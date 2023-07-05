import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AccountModel} from "../../../model/account/account.model";

@Component({
  selector: 'app-account-profile-modal',
  templateUrl: './account-profile-modal.component.html',
  styleUrls: ['./account-profile-modal.component.css']
})
export class AccountProfileModalComponent {

  accountInfo: any = {}

  constructor(
    public activeModal: NgbActiveModal
  ) {
  }
}
