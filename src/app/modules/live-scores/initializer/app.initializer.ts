import { LiveGameTsService } from './../services/live-game.ts.service';
import { ScoringService } from './../services/scoring.service';
import { ResumeCard } from './../../../scorer-view/services/resume-scoring.service';
import { GetLiveScoresService } from './../services/get-live-scores.service';
// src/app/initializer/app.initializer.ts
import { Observable } from 'rxjs';
import { Over } from '../i/i/over';

export function initializeAppFactory(
  liveGameTsService: LiveGameTsService
): () => Observable<Over[]> {
  return () => liveGameTsService.getOverDetails();
}
