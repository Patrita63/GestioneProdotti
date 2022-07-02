import { TestBed } from '@angular/core/testing';

import { RESTAPI } from './restapi.service';

describe('RESTAPIService', () => {
  let service: RESTAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RESTAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
