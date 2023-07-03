import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HandlingHttpErrorInterceptor} from "../interceptor/handling-http-error-interceptor.service";

export const Constants = {
  AUTH_TOKEN: 'authToken',
  ACCOUNT_INFO: 'accountInfo',

  ROUTE_PATH: {
    AUTH_LOGIN: 'auth/login',
    AUTH_REGISTER: 'auth/register',
    COMPETITION: 'competition',
  },

  httpInterceptorProviders: [
    {provide: HTTP_INTERCEPTORS, useClass: HandlingHttpErrorInterceptor, multi: true},
  ]
}
