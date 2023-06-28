import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetitionListComponent} from "./competition/competition-list/competition-list.component";
import {MatchListComponent} from "./match/match-list/match-list.component";
import {CompetitionDetailComponent} from "./competition/competition-detail/competition-detail.component";
import {LoginComponent} from "./auth/login/login.component";
import {authGuard} from "./guard/auth.guard";
import {Constants} from "./common/constants";

const routes: Routes = [
  {
    path: Constants.ROUTE_PATH.COMPETITION_LIST,
    component: CompetitionListComponent,
    canActivate: [authGuard]
  },
  {
    path: Constants.ROUTE_PATH.COMPETITION_DETAIL,
    component: CompetitionDetailComponent,
    canActivate: [authGuard]
  },
  // {
  //   path: 'match/match-list',
  //   component: MatchListComponent
  // },
  {
    path: Constants.ROUTE_PATH.AUTH_LOGIN,
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: Constants.ROUTE_PATH.COMPETITION_LIST,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
