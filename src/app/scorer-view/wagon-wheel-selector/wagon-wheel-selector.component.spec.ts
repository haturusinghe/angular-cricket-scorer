import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WagonWheelSelectorComponent } from './wagon-wheel-selector.component';

describe('WagonWheelSelectorComponent', () => {
  let component: WagonWheelSelectorComponent;
  let fixture: ComponentFixture<WagonWheelSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WagonWheelSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WagonWheelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
