import { TestBed } from '@angular/core/testing';

import { GetLiveScoresService } from './get-live-scores.service';

describe('GetLiveScoresService', () => {
  let service: GetLiveScoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLiveScoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
