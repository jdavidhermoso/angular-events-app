import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedupEventComponent } from './signedup-event.component';

describe('SignedupEventComponent', () => {
  let component: SignedupEventComponent;
  let fixture: ComponentFixture<SignedupEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedupEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedupEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
