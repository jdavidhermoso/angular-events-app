import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpConfirmationModalComponent } from './sign-up-confirmation-modal.component';

describe('SignUpConfirmationModalComponent', () => {
  let component: SignUpConfirmationModalComponent;
  let fixture: ComponentFixture<SignUpConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
