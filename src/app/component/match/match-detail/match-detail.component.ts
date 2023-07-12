import {Component} from '@angular/core';
import {MatchModel} from "../../../model/match/match.model";
import {Constants} from "../../../common/constants";
import {MatchService} from "../../../service/match/match.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent {
  match: MatchModel = {
    id: 1,
    homeTeam: {
      id: 2,
      name: "MU"
    },
    awayTeam: {
      id: 3,
      name: "LIV"
    },
    homeScore: 3,
    awayScore: 1,
    matchDate: "11/03/2019",
    kickOff: "21:30",
    stadium: {
      id: 1,
      name: "Old Trafford"
    },
  }

  constructor(
    private matchService: MatchService,
    private route: ActivatedRoute,
  ) {
    this.getMatch()
  }

  routerLinkCompetitionDetail(competitionId: number) {
    return "/" + Constants.ROUTE_PATH.COMPETITION + "/" + competitionId
  }

  getMatch() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.matchService.getMatch(id).subscribe(value => {
      console.log(value)
      this.match = value
    })
  }
}
