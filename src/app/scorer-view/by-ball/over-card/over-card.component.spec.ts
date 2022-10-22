import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverCardComponent } from './over-card.component';

describe('OverCardComponent', () => {
  let component: OverCardComponent;
  let fixture: ComponentFixture<OverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
