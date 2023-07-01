import {CanActivateFn, Router} from '@angular/router';
import {Constants} from "../common/constants";
import {inject} from "@angular/core";
import {StorageService} from "../service/storage/storage.service";

export const authGuard: CanActivateFn = (route, state) => {
  let storageService = inject(StorageService)
  if (!isValid(storageService.getAccessToken())) {
    storageService.clear()
    inject(Router).navigateByUrl(Constants.ROUTE_PATH.AUTH_LOGIN);
    return false;
  }

  return true;
};

function isValid(accessToken: string | null) {
  if (!accessToken) {
    return false;
  }

  let obj = JSON.parse(atob(accessToken.split('.')[1]))
  console.log(obj)
  let currentTime = new Date();
  if (currentTime.getTime() / 1000 > obj.exp) {
    console.log("accessToken expired")
    return false;
  }

  return true;
}
