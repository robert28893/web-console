import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatchModel} from "../../../model/match/match.model";
import {CompetitionModel} from "../../../model/competition/competition.model";
import {SeasonModel} from "../../../model/season/season.model";
import {MatchService} from "../../../service/match/match.service";
import {Constants} from "../../../common/constants";
import {PaginationModel} from "../../../model/pagination/pagination.model";
import {TeamModel} from "../../../model/team/team.model";

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit, OnChanges {
  @Input() competition?: CompetitionModel
  @Input() season?: SeasonModel
  pagingMatches: PaginationModel<MatchModel> = new PaginationModel<MatchModel>(1, 10)
  filterTeam?: TeamModel

  constructor(
    private matchService: MatchService
  ) {
  }

  ngOnInit(): void {
    this.getMatches();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getMatches();
  }

  getMatches() {
    if (this.competition && this.season) {
      this.matchService.getMatches(this.competition.id, this.season.id, this.pagingMatches.page, this.pagingMatches.pageSize, this.filterTeam?.id).subscribe(value => {
        this.pagingMatches = value
      })
    }
  }

  routeLinkMatchDetail(matchId: number) {
    return "/" + Constants.ROUTE_PATH.MATCH + "/" + matchId
  }

  clickOnTeam(team: TeamModel) {
    this.filterTeam = team;
    this.getMatches();
  }

  clearFilterTeam() {
    this.filterTeam = undefined
    this.getMatches()
  }
}
