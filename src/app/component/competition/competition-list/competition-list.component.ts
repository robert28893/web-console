import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../../service/competition/competition.service";
import {Observable} from "rxjs";
import {CompetitionModel} from "../../../model/competition/competition.model";
import {Constants} from "../../../common/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit{

  competitions: Observable<CompetitionModel[]> = new Observable<CompetitionModel[]>();

  constructor(
    private competitionService: CompetitionService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.competitions = this.competitionService.getCompetitions();
  }

    routerLinkCompetitionDetail(id: number) {
        return this.router.createUrlTree([Constants.ROUTE_PATH.COMPETITION_DETAIL, id]).toString()
    }
}
