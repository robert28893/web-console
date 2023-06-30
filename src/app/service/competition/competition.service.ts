import {Injectable} from '@angular/core';
import {CompetitionModel} from "../../model/competition/competition.model";
import {catchError, map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Constants} from "../../common/constants";

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

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  public getCompetitions(): Observable<CompetitionModel[]> {
    // TODO: call api
    // return this.httpClient.get(environment.apiUrl + "/soccer-service/competitions")
    return this.httpClient.get<any>(environment.apiUrl + "/soccer-service/competitions",
      this.getHeaders())
      .pipe(
        map(value => {
          console.log(value)
          console.log(value.object.data)
          let competitions: CompetitionModel[] = []
          for(let obj of value.object.data) {
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
    return new Observable<CompetitionModel>(subscriber => subscriber.next(this.competitions[id - 1]))
  }

  getHeaders() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json')
    if (localStorage.getItem(Constants.ACCESS_TOKEN)) {
      // headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem(Constants.ACCESS_TOKEN))
    }

    return { headers }
  }
}
