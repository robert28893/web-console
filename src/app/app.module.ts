import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionListComponent } from './competition/competition-list/competition-list.component';
import { MatchListComponent } from './match/match-list/match-list.component';
import { CompetitionDetailComponent } from './competition/competition-detail/competition-detail.component';
import { SeasonDropdownListComponent } from './season/season-dropdown-list/season-dropdown-list.component';
import { LoginComponent } from './auth/login/login.component';
import { AccountInfoComponent } from './account/account-info/account-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionListComponent,
    MatchListComponent,
    CompetitionDetailComponent,
    SeasonDropdownListComponent,
    LoginComponent,
    AccountInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
