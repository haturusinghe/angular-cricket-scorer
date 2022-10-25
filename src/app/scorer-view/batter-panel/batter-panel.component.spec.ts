import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterPanelComponent } from './batter-panel.component';

describe('BatterPanelComponent', () => {
  let component: BatterPanelComponent;
  let fixture: ComponentFixture<BatterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatterPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
