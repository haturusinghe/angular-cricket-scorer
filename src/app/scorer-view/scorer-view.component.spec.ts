import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorerViewComponent } from './scorer-view.component';

describe('ScorerViewComponent', () => {
  let component: ScorerViewComponent;
  let fixture: ComponentFixture<ScorerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScorerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
