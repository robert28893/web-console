import {Injectable} from '@angular/core';
import {SeasonModel} from "../../model/season/season.model";
import {catchError, map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {StorageService} from "../storage/storage.service";

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

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
  ) {
  }

  public getSeasons(competitionId: number): Observable<SeasonModel[]> {
    return this.httpClient.get<any>(environment.apiUrl + '/soccer-service/season',
      Object.assign(this.getHeaders(),
        {params: {'competitionId': competitionId}}),
    ).pipe(
      map(value => {
        console.log(value.object.data)
        let seasons: SeasonModel[] = []
        for (let obj of value.object.data) {
          seasons.push(new SeasonModel(
            obj.id, obj.name))
        }
        return seasons;
      }),
      // catchError(err => {
      //   console.log(err)
      //   return []
      // })
    )
    // return new Observable<SeasonModel[]>(subscriber => subscriber.next(this.seasons))
  }

  public getSeason(seasonId: number): Observable<SeasonModel> {
    return new Observable<SeasonModel>(subscriber => subscriber.next(this.seasons[0]))
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
