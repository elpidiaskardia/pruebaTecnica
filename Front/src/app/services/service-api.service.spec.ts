import { TestBed } from '@angular/core/testing';

import { ApiService } from './service-api.service';

describe('ServiceApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

});
