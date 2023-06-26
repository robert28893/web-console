import {Component, Input, NgModule, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {SeasonModel} from "../shared/season.model";
import {SeasonService} from "../shared/season.service";
import {CompetitionModel} from "../../competition/shared/competition.model";

@Component({
  selector: 'app-season-dropdown-list',
  templateUrl: './season-dropdown-list.component.html',
  styleUrls: ['./season-dropdown-list.component.css']
})
export class SeasonDropdownListComponent implements OnInit {
  @Input() competition?: CompetitionModel
  seasons: Observable<SeasonModel[]> = new Observable<SeasonModel[]>()
  selectedSeason?: SeasonModel

  constructor(
    private seasonService: SeasonService
  ) {
  }

  ngOnInit(): void {
    if (this.competition) {
      this.seasons = this.seasonService.getSeasons(this.competition.id)
      this.seasons.subscribe(value => this.selectedSeason = value[0])
    }
  }

}
