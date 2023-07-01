import {Injectable} from '@angular/core';
import {CompetitionModel} from "../../model/competition/competition.model";
import {catchError, map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {StorageService} from "../storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  // competitions = [
  //   new CompetitionModel(
  //     1, 'Premier League', 'male', 'england'
  //   ),
  //   new CompetitionModel(
  //     2, 'LaLiga', 'male', 'england'
  //   )
  // ];

  // competitions: CompetitionModel[] = [];

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
  ) {
  }

  public getCompetitions(): Observable<CompetitionModel[]> {
    // call api
    return this.httpClient.get<any>(environment.apiUrl + "/soccer-service/competition",
      this.getHeaders())
      .pipe(
        map(value => {
          console.log(value)
          console.log(value.object.data)
          let competitions: CompetitionModel[] = []
          for (let obj of value.object.data) {
            competitions.push(new CompetitionModel(
              obj.id, obj.name, obj.gender, obj.countryName))
          }
          return competitions;
          // return [new CompetitionModel(
          //   1, 'Premier League', 'male', 'england')]
        }),
        catchError(err => {
          console.log(err)
          return []
        })
      );
  }

  public getCompetition(id: number): Observable<CompetitionModel> {
    // return new Observable<CompetitionModel>(subscriber => subscriber.next(this.competitions.filter(value => value.id == id).at(0)))
    return this.httpClient.get<any>(environment.apiUrl + '/soccer-service/competition/' + id,
      this.getHeaders())
    .pipe(
      map(value => {
        console.log(value)
        console.log(value.object)
        let obj = value.object
        return new CompetitionModel(
          obj.id, obj.name, obj.gender, obj.countryName);
        // return [new CompetitionModel(
        //   1, 'Premier League', 'male', 'england')]
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
