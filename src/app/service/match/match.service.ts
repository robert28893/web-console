import {Injectable} from '@angular/core';
import {MatchModel} from "../../model/match/match.model";
import {catchError, map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "../storage/storage.service";
import {environment} from "../../../environments/environment";

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

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
  ) {
  }

  public getMatches(competitionId: number, seasonId: number): Observable<MatchModel[]> {
    return this.httpClient.get<any>(environment.apiUrl + '/soccer-service/match',
      Object.assign(this.getHeaders(),
        {params: {'competitionId': competitionId, 'seasonId': seasonId}})
    ).pipe(
      map(value => {
        console.log(value)
        let matches: MatchModel[] = []
        for (let obj of value.object.data) {
          matches.push({
            id: obj.id,
            homeTeamId: obj.homeTeamId,
            homeTeamName: obj.homeTeamName,
            homeScore: obj.homeScore,
            awayTeamId: obj.awayTeamId,
            awayTeamName: obj.awayTeamName,
            awayScore: obj.awayScore,
            matchDate: obj.matchDate,
            kickOff: obj.kickOff,
          })
        }
        return matches
      }),
    // catchError(err => {
    //   console.log(err)
    //   return []
    // })
  )

    return new Observable<MatchModel[]>(subscriber => {
      subscriber.next(this.matches)
    })
  }

  getHeaders() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json')
    if (this.storageService.getAccessToken()) {
      headers = headers.append('Authorization', 'Bearer ' + this.storageService.getAccessToken())
    }

    return {headers}
  }
}
