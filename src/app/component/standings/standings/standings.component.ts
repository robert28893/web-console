import {Component, Input, OnInit} from '@angular/core';
import {StandingsModel} from "../../../model/standings/standings.model";
import {CompetitionModel} from "../../../model/competition/competition.model";
import {SeasonModel} from "../../../model/season/season.model";
import {StandingsService} from "../../../service/standings/standings.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  @Input() competition?: CompetitionModel
  @Input() season?: SeasonModel
  standings?: Observable<StandingsModel[]>

  constructor(
    private standingsService: StandingsService,
  ) {
  }

  ngOnInit(): void {
    this.standings = this.getStandings()
  }

  getStandings() {
    if (this.competition && this.season) {
      return this.standingsService.getStandings(this.competition.id, this.season.id)
    }
    return new Observable<StandingsModel[]>(subscriber => {
      subscriber.next([])
    })
  }
}
