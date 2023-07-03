import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {StorageService} from "../service/storage/storage.service";
import {Router} from "@angular/router";
import {Constants} from "../common/constants";
import {ToastService} from "../service/toast/toast.service";
import {Location} from "@angular/common"

@Injectable()
export class HandlingHttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private storageService: StorageService,
    private router: Router,
    private toastService: ToastService,
    private location: Location,
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(tap({
        error: err => {
          console.log(err)
          if (err instanceof HttpErrorResponse) {
            if (err.status == HttpStatusCode.Unauthorized) {
              let path = this.location.path()
              console.log(path)
              if (path === "/" + Constants.ROUTE_PATH.AUTH_LOGIN) {
                this.toastService.show('Tên đăng nhập hoặc mật khẩu không đúng', 5000)
              }
              console.log("unauthorized => clear local storage and redirect to login page")
              this.storageService.clear();
              this.router.navigateByUrl(Constants.ROUTE_PATH.AUTH_LOGIN);
            } else {
              this.toastService.show('Đã có lỗi xảy ra', 5000)
            }
          } else {
            this.toastService.show('Đã có lỗi xảy ra', 5000)
          }
        }
      }));
  }
}
