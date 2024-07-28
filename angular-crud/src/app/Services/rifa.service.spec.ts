import { TestBed } from '@angular/core/testing';

import { RifaService } from './rifa.service';

describe('RifaService', () => {
  let service: RifaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RifaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
