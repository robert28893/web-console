import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetitionListComponent} from "./competition/competition-list/competition-list.component";
import {MatchListComponent} from "./match/match-list/match-list.component";
import {CompetitionDetailComponent} from "./competition/competition-detail/competition-detail.component";

const routes: Routes = [
  {
    path: 'competition/competition-list',
    component: CompetitionListComponent
  },
  {
    path: 'competition/competition-detail',
    component: CompetitionDetailComponent
  },
  {
    path: 'match/match-list',
    component: MatchListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
