import {CanActivateFn, Router} from '@angular/router';
import {Constants} from "../common/constants";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem(Constants.ACCESS_TOKEN) != null) {
    return true;
  }
  inject(Router).navigateByUrl(Constants.ROUTE_PATH.AUTH_LOGIN);
  return false;
};
