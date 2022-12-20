import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattingPanelComponent } from './batting-panel.component';

describe('BattingPanelComponent', () => {
  let component: BattingPanelComponent;
  let fixture: ComponentFixture<BattingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattingPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
