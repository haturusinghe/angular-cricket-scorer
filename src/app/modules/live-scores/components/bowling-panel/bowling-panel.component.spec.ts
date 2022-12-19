import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingPanelComponent } from './bowling-panel.component';

describe('BowlingPanelComponent', () => {
  let component: BowlingPanelComponent;
  let fixture: ComponentFixture<BowlingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowlingPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BowlingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
