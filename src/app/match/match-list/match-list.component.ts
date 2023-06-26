import {Component, Input} from '@angular/core';
import {MatchModel} from "../shared/match.model";
import {CompetitionModel} from "../../competition/shared/competition.model";
import {SeasonModel} from "../../season/shared/season.model";

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent {
  @Input() competition?: CompetitionModel
  @Input() season?: SeasonModel

  matches = [
    new MatchModel(
      1,
      2,
      "MU",
      3,
      "LIV",
      3,
      1,
      "11/03/2019",
      "21:30"
    )
  ]
}
