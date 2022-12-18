import { TestBed } from '@angular/core/testing';

import { LiveGameTsService } from './live-game.ts.service';

describe('LiveGameTsService', () => {
  let service: LiveGameTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveGameTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
