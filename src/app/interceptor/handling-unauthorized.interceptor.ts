import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpStatusCode
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {StorageService} from "../service/storage/storage.service";
import {Router} from "@angular/router";
import {Constants} from "../common/constants";

@Injectable()
export class HandlingUnauthorizedInterceptor implements HttpInterceptor {

  constructor(
    private storageService: StorageService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(tap({
        error: err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == HttpStatusCode.Unauthorized) {
              console.log("unauthorized => clear local storage and redirect to login page")
              this.storageService.clear();
              this.router.navigateByUrl(Constants.ROUTE_PATH.AUTH_LOGIN);
            }
          }
        }
      }));
  }
}
