import { Injectable } from '@angular/core';
import {SeasonModel} from "./season.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  seasons = [
    new SeasonModel(
      1, "2019/2020"
    ),
    new SeasonModel(
      2, "2017/2018"
    )
  ]
  constructor() { }

  public getSeasons(competitionId: number): Observable<SeasonModel[]> {
    return new Observable<SeasonModel[]>(subscriber => subscriber.next(this.seasons))
  }

  public getSeason(seasonId: number): Observable<SeasonModel> {
    return new Observable<SeasonModel>(subscriber => subscriber.next(this.seasons[0]))
  }
}
