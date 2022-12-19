import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattingViewComponent } from './batting-view.component';

describe('BattingViewComponent', () => {
  let component: BattingViewComponent;
  let fixture: ComponentFixture<BattingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattingViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
