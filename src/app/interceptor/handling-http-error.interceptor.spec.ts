import { TestBed } from '@angular/core/testing';

import { HandlingHttpErrorInterceptor } from './handling-http-error-interceptor.service';

describe('HandlingHttpErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HandlingHttpErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HandlingHttpErrorInterceptor = TestBed.inject(HandlingHttpErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
