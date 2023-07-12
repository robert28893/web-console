import {Component, Input} from '@angular/core';
import {MatchModel} from "../../../model/match/match.model";

@Component({
  selector: 'app-lineups',
  templateUrl: './lineups.component.html',
  styleUrls: ['./lineups.component.css']
})
export class LineupsComponent {
  @Input() match?: MatchModel
}
