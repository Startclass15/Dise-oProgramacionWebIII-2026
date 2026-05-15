import { TestBed } from '@angular/core/testing';

import { AirtableServices } from './airtable-services';

describe('AirtableServices', () => {
  let service: AirtableServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirtableServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
