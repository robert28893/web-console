import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionListComponent } from './competition/competition-list/competition-list.component';
import { MatchListComponent } from './match/match-list/match-list.component';
import { CompetitionDetailComponent } from './competition/competition-detail/competition-detail.component';
import { SeasonDropdownListComponent } from './season/season-dropdown-list/season-dropdown-list.component';
import { LoginComponent } from './auth/login/login.component';
import { AccountInfoComponent } from './account/account-info/account-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionListComponent,
    MatchListComponent,
    CompetitionDetailComponent,
    SeasonDropdownListComponent,
    LoginComponent,
    AccountInfoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }