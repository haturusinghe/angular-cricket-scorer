import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatchMetaDataService {
  status: StartingStatus = { startingNewMatch: true };

  constructor() {}

  getStatus(): Observable<StartingStatus> {
    const s = of(this.status);
    return s;
  }

  startScoringNewMatch() {
    this.status.startingNewMatch = false;
    console.log('AFTER PREGAME');
  }

  startPreGameNewMatch() {
    this.status.startingNewMatch = true;
    console.log('BEFORE PREGAME');
  }

  resumeOldMatch() {
    this.status.startingNewMatch = false;
    console.log('RESUMING OLD GAME');
  }
}

export interface StartingStatus {
  startingNewMatch: boolean;
}
