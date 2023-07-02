import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HandlingUnauthorizedInterceptor} from "../interceptor/handling-unauthorized.interceptor";

export const Constants = {
  AUTH_TOKEN: 'authToken',
  ACCOUNT_INFO: 'accountInfo',

  ROUTE_PATH: {
    AUTH_LOGIN: 'auth/login',
    AUTH_REGISTER: 'auth/register',
    COMPETITION: 'competition',
  },

  httpInterceptorProviders: [
    {provide: HTTP_INTERCEPTORS, useClass: HandlingUnauthorizedInterceptor, multi: true},
  ]
}
