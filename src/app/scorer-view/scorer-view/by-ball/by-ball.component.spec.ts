import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByBallComponent } from './by-ball.component';

describe('ByBallComponent', () => {
  let component: ByBallComponent;
  let fixture: ComponentFixture<ByBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByBallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
