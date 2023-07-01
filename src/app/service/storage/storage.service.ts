import {Injectable} from '@angular/core';
import {Constants} from "../../common/constants";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  public setAuthToken(authToken: any): void {
    localStorage.setItem(Constants.AUTH_TOKEN, JSON.stringify(authToken))
  }

  public getAuthToken(): any {
    return JSON.parse(localStorage.getItem(Constants.AUTH_TOKEN) || '{}')
  }

  public setAccountInfo(accountInfo: any): void {
    localStorage.setItem(Constants.ACCOUNT_INFO, JSON.stringify(accountInfo))
  }

  public getAccountInfo(): any {
    return JSON.parse(localStorage.getItem(Constants.ACCOUNT_INFO) || '{}')
  }

  public getAccessToken(): string {
    return this.getAuthToken().access_token;
  }

  public clear(): void {
    localStorage.clear()
  }
}
