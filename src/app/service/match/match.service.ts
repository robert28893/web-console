import {Injectable} from '@angular/core';
import {MatchModel} from "../../model/match/match.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matches = [
    new MatchModel(
      1,
      2,
      "MU",
      3,
      "LIV",
      3,
      1,
      "11/03/2019",
      "21:30"
    ),
    new MatchModel(
      2,
      2,
      "ARS",
      3,
      "MC",
      1,
      1,
      "11/03/2019",
      "21:30"
    )
  ]

  constructor() {
  }

  public getMatches(competitionId: number, seasonId: number): Observable<MatchModel[]> {
    return new Observable<MatchModel[]>(subscriber => {
      subscriber.next(this.matches)
    })
  }
}
