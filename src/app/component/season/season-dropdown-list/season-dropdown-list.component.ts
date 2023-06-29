import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Observable} from "rxjs";
import {SeasonModel} from "../../../model/season/season.model";
import {SeasonService} from "../../../service/season/season.service";
import {CompetitionModel} from "../../../model/competition/competition.model";

@Component({
  selector: 'app-season-dropdown-list',
  templateUrl: './season-dropdown-list.component.html',
  styleUrls: ['./season-dropdown-list.component.css']
})
export class SeasonDropdownListComponent implements OnInit {
  @Input() competition?: CompetitionModel
  seasons: Observable<SeasonModel[]> = new Observable<SeasonModel[]>()
  selectedSeason?: SeasonModel
  @Output() seasonChangeEvent = new EventEmitter<SeasonModel>();

  constructor(
    private seasonService: SeasonService
  ) {
  }

  ngOnInit(): void {
    if (this.competition) {
      this.seasons = this.seasonService.getSeasons(this.competition.id)
      this.seasons.subscribe(value => {
        this.selectedSeason = value[0]
        this.seasonChangeEvent.emit(value[0])
      })
    }
  }

  onChangeSeason(season: SeasonModel) {
    console.log(season)
    this.seasonChangeEvent.emit(season)
  }

}
