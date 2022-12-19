import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveScoreHomeComponent } from './live-score-home.component';

describe('LiveScoreHomeComponent', () => {
  let component: LiveScoreHomeComponent;
  let fixture: ComponentFixture<LiveScoreHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveScoreHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveScoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
