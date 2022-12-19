import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBatsmanComponent } from './change-batsman.component';

describe('ChangeBatsmanComponent', () => {
  let component: ChangeBatsmanComponent;
  let fixture: ComponentFixture<ChangeBatsmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBatsmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeBatsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
