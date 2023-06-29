import {Injectable} from '@angular/core';
import {CompetitionModel} from "../../model/competition/competition.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  competitions = [
    new CompetitionModel(
      1, 'Premier League', 'male', 'england'
    ),
    new CompetitionModel(
      2, 'LaLiga', 'male', 'england'
    )
  ];

  constructor() {
  }

  public getCompetitions(): Observable<CompetitionModel[]> {
    // TODO: call api
    return new Observable(subscriber => subscriber.next(this.competitions));
  }

  public getCompetition(id: number): Observable<CompetitionModel> {
    return new Observable<CompetitionModel>(subscriber => subscriber.next(this.competitions[id - 1]))
  }
}
