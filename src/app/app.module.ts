import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionListComponent } from './component/competition/competition-list/competition-list.component';
import { MatchListComponent } from './component/match/match-list/match-list.component';
import { CompetitionDetailComponent } from './component/competition/competition-detail/competition-detail.component';
import { SeasonDropdownListComponent } from './component/season/season-dropdown-list/season-dropdown-list.component';
import { LoginComponent } from './component/auth/login/login.component';
import { AccountInfoComponent } from './component/account/account-info/account-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { CompetitionComponent } from './component/competition/competition/competition.component';
import {Constants} from "./common/constants";
import { ToastComponent } from './component/shared/toast/toast.component';
import { AccountProfileModalComponent } from './component/account/account-profile-modal/account-profile-modal.component';
import { StandingsComponent } from './component/standings/standings/standings.component';
import { MatchDetailComponent } from './component/match/match-detail/match-detail.component';
import { LineupsComponent } from './component/lineups/lineups/lineups.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionListComponent,
    MatchListComponent,
    CompetitionDetailComponent,
    SeasonDropdownListComponent,
    LoginComponent,
    AccountInfoComponent,
    NavbarComponent,
    RegisterComponent,
    CompetitionComponent,
    ToastComponent,
    AccountProfileModalComponent,
    StandingsComponent,
    MatchDetailComponent,
    LineupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [Constants.httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
