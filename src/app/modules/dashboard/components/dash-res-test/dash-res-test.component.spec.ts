import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashResTestComponent } from './dash-res-test.component';

describe('DashResTestComponent', () => {
  let component: DashResTestComponent;
  let fixture: ComponentFixture<DashResTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashResTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashResTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
