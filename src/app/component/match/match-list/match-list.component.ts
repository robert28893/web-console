import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatchModel} from "../../../model/match/match.model";
import {CompetitionModel} from "../../../model/competition/competition.model";
import {SeasonModel} from "../../../model/season/season.model";
import {MatchService} from "../../../service/match/match.service";
import {Constants} from "../../../common/constants";

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit, OnChanges{
  @Input() competition?: CompetitionModel
  @Input() season?: SeasonModel

  constructor(
    private matchService: MatchService
  ) {
  }

  matches: MatchModel[] = []

  ngOnInit(): void {
    this.getMatches();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getMatches();
  }

  getMatches() {
    if (this.competition && this.season) {
      this.matchService.getMatches(this.competition.id, this.season.id).subscribe(value => {
        this.matches = value
      })
    }
  }

  routeLinkMatchDetail(matchId: number) {
    return "/" + Constants.ROUTE_PATH.MATCH + "/" + matchId
  }

}
