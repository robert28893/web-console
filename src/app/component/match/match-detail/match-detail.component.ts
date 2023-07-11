import { Component } from '@angular/core';
import {MatchModel} from "../../../model/match/match.model";

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent {
  matchModel?: MatchModel
}
