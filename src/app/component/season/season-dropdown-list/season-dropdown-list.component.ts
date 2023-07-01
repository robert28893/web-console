import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, tap} from "rxjs";
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
    console.log('init season')
    if (this.competition) {
      this.seasons = this.seasonService.getSeasons(this.competition.id).pipe(tap(value => {
        this.selectedSeason = value.at(0)
        console.log('selectedSeason ' + JSON.stringify(this.selectedSeason))
        this.seasonChangeEvent.emit(value[0])
      }))
    }
  }

  onChangeSeason(season: SeasonModel) {
    console.log(season)
    this.seasonChangeEvent.emit(season)
  }

  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.seasons.subscribe(value => {
  //     this.selectedSeason = value[0]
  //     this.seasonChangeEvent.emit(value[0])
  //   })
  // }

  compareSeason(s1: any, s2: any): boolean {
    return s1 && s2 ? s1.id === s2.id : s1 === s2;
  }

}
