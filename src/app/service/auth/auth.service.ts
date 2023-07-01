import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Constants} from "../../common/constants";
import {map, Observable} from "rxjs";
import {AccountModel} from "../../model/account/account.model";
import {StorageService} from "../storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
  ) {
  }

  login(username: string, password: string) {
    return this.httpClient.post<any>(environment.apiUrl + '/auth-service/oauth2/token',
      new HttpParams()
        .set('grant_type', 'custom_password')
        .set('username', username)
        .set('password', password),
      this.getLoginHeaders())
  }

  getProfile(): Observable<AccountModel> {
    return this.httpClient.get<any>(environment.apiUrl + '/auth-service/account/profile',
      this.getHeaders()).pipe(map(value => {
      let obj = value.object
      return {id: obj.id, email: obj.email, username: obj.username, fullName: obj.fullName}
    }))
  }

  getLoginHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers = headers.append('Authorization',
      'Basic ' + btoa(environment.clientId + ':' + environment.clientSecret))
    return {headers}
  }

  getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json')
    let accessToken = this.storageService.getAccessToken();
    if (accessToken) {
      headers = headers.append('Authorization', 'Bearer ' + accessToken)
    }
    return {headers}
  }
}
