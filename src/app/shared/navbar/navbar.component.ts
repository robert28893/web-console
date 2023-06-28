import { Component } from '@angular/core';
// import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // imports: [NgbNavModule],
})
export class NavbarComponent {
  isMenuCollapsed: boolean = true;

}
