import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "../storage/storage.service";
import {map, Observable} from "rxjs";
import {StandingsModel} from "../../model/standings/standings.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(
    private storageService: StorageService,
    private httpClient: HttpClient,
  ) {
  }

  getStandings(competitionId: number, seasonId: number): Observable<StandingsModel[]> {
    return this.httpClient.get<any>(environment.apiUrl + '/soccer-service/standings',
      {...this.getHeaders(),
        params: {'competitionId': competitionId, 'seasonId': seasonId}
      })
      .pipe(map(
        value => {
          let standings: StandingsModel[] = []
          for (let s of value.object.data) {
            standings.push(<StandingsModel>{
              ...s
            })
          }
          return standings
        }
      ))
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
