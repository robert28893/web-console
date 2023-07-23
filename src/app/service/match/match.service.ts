import {Injectable} from '@angular/core';
import {MatchModel} from "../../model/match/match.model";
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "../storage/storage.service";
import {environment} from "../../../environments/environment";
import {PaginationModel} from "../../model/pagination/pagination.model";
import {reference} from "@popperjs/core";

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matches = [
    new MatchModel(
      1,
      {
        id: 2,
        name: "MU"
      },
      {
        id: 3,
        name: "LIV"
      },
      3,
      1,
      "11/03/2019",
      "21:30"
    ),
    new MatchModel(
      2,
      {
        id: 2,
        name: "ARS"
      },
      {
        id: 3,
        name: "MC"
      },
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

  public getMatches(competitionId: number, seasonId: number, page: number, pageSize: number, teamId?: number): Observable<PaginationModel<MatchModel>> {
    let params: any = {'competitionId': competitionId, 'seasonId': seasonId, 'page': page, 'pageSize': pageSize}
    if (teamId) {
      params.teamId = teamId
    }
    return this.httpClient.get<any>(environment.apiUrl + '/soccer-service/match',
      Object.assign(this.getHeaders(),
        {params: params})
    ).pipe(
      map(value => {
        console.log(value)
        let matches: MatchModel[] = []
        for (let obj of value.object.data) {
          matches.push({
            id: obj.id,
            homeTeam: {
              id: obj.homeTeamId,
              name: obj.homeTeamName
            },
            homeScore: obj.homeScore,
            awayTeam: {
              id: obj.awayTeamId,
              name: obj.awayTeamName,
            },
            awayScore: obj.awayScore,
            matchDate: obj.matchDate,
            kickOff: obj.kickOff,
            homeTeamLineups: [],
            awayTeamLineups: [],
            homeTeamManagers: [],
            awayTeamManagers: []
          })
        }
        return new PaginationModel(page, pageSize, value.object.totalElements, matches)
      }),
      // catchError(err => {
      //   console.log(err)
      //   return []
      // })
    )

    // return new Observable<MatchModel[]>(subscriber => {
    //   subscriber.next(this.matches)
    // })
  }

  getMatch(id: number): Observable<MatchModel> {
    return this.httpClient.get<any>(environment.apiUrl + '/soccer-service/match/' + id,
      this.getHeaders()
    ).pipe(
      map(value => {
        let obj = value.object
        return {
          id: obj.id,
          homeTeam: {
            id: obj.homeTeamId,
            name: obj.homeTeamName
          },
          homeScore: obj.homeScore,
          awayTeam: {
            id: obj.awayTeamId,
            name: obj.awayTeamName,
          },
          awayScore: obj.awayScore,
          matchDate: obj.matchDate,
          kickOff: obj.kickOff,
          competition: {
            ...obj.competition
          },
          season: {
            ...obj.season
          },
          stadium: {
            ...obj.stadium
          },
          homeTeamManagers: obj.homeTeamManagers,
          awayTeamManagers: obj.awayTeamManagers,
          homeTeamLineups: obj.homeTeamLineups,
          awayTeamLineups: obj.awayTeamLineups,
          referee: {
            ...obj.referee
          }
        }
      })
    )
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
