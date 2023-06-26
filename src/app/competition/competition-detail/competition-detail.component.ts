import {Component, Input, OnInit} from '@angular/core';
import {CompetitionModel} from "../shared/competition.model";
import {CompetitionService} from "../shared/competition.service";

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.css']
})
export class CompetitionDetailComponent implements OnInit {
  @Input() competition?: CompetitionModel;

  constructor(
    private competitionService: CompetitionService,
  ) {
  }

  ngOnInit(): void {
    this.competitionService.getCompetition(1).subscribe(competition => this.competition = competition);
  }


}
