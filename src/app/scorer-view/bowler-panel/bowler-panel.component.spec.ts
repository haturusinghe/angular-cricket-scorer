import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlerPanelComponent } from './bowler-panel.component';

describe('BowlerPanelComponent', () => {
  let component: BowlerPanelComponent;
  let fixture: ComponentFixture<BowlerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowlerPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BowlerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
