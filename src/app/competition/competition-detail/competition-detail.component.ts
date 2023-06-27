import {Component, Input, OnInit} from '@angular/core';
import {CompetitionModel} from "../shared/competition.model";
import {CompetitionService} from "../shared/competition.service";
import {Constants} from "../../common/constants";

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.css']
})
export class CompetitionDetailComponent implements OnInit {
  @Input() competition?: CompetitionModel;
  routeLink = Constants.ROUTE_PATH.COMPETITION_LIST;

  constructor(
    private competitionService: CompetitionService,
  ) {
  }

  ngOnInit(): void {
    this.competitionService.getCompetition(1).subscribe(competition => this.competition = competition);
  }

}
