import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLiveComponent } from './get-live.component';

describe('GetLiveComponent', () => {
  let component: GetLiveComponent;
  let fixture: ComponentFixture<GetLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
