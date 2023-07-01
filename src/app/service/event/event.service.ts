import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private profileSubject: Subject<any>;

  constructor() {
    this.profileSubject = new Subject<any>();
  }

  public sendProfileEvent(event: any) {
    this.profileSubject.next(event);
  }

  public getProfileEvent() {
    return this.profileSubject.asObservable();
  }
}
