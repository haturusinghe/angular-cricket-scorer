import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchPromptComponent } from './switch-prompt.component';

describe('SwitchPromptComponent', () => {
  let component: SwitchPromptComponent;
  let fixture: ComponentFixture<SwitchPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchPromptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
