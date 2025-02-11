import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGreetComponent } from './button-greet.component';

describe('ButtonGreetComponent', () => {
  let component: ButtonGreetComponent;
  let fixture: ComponentFixture<ButtonGreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGreetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
