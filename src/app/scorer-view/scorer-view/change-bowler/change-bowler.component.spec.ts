import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBowlerComponent } from './change-bowler.component';

describe('ChangeBowlerComponent', () => {
  let component: ChangeBowlerComponent;
  let fixture: ComponentFixture<ChangeBowlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBowlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeBowlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
