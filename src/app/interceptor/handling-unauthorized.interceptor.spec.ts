import { TestBed } from '@angular/core/testing';

import { HandlingUnauthorizedInterceptor } from './handling-unauthorized.interceptor';

describe('HandlingUnauthorizedInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HandlingUnauthorizedInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HandlingUnauthorizedInterceptor = TestBed.inject(HandlingUnauthorizedInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
