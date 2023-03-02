import { TestBed } from '@angular/core/testing';

import { LafraseService } from './lafrase.service';

describe('LafraseService', () => {
  let service: LafraseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LafraseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
