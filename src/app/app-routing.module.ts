import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompetitionListComponent} from "./component/competition/competition-list/competition-list.component";
import {CompetitionDetailComponent} from "./component/competition/competition-detail/competition-detail.component";
import {LoginComponent} from "./component/auth/login/login.component";
import {authGuard} from "./guard/auth.guard";
import {Constants} from "./common/constants";
import {RegisterComponent} from "./component/auth/register/register.component";

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
  //   component: MatchListComponent,
  //   canActivate: [authGuard]
  // },
  {
    path: Constants.ROUTE_PATH.AUTH_LOGIN,
    component: LoginComponent
  },
  {
    path: Constants.ROUTE_PATH.AUTH_REGISTER,
    component: RegisterComponent
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
