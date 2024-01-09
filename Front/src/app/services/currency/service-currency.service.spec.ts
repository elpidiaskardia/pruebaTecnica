import { TestBed } from '@angular/core/testing';

import { ServiceCurrencyService } from './service-currency.service';

describe('ServiceCurrencyService', () => {
  let service: ServiceCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
