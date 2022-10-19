import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunsPanelComponent } from './runs-panel.component';

describe('RunsPanelComponent', () => {
  let component: RunsPanelComponent;
  let fixture: ComponentFixture<RunsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
