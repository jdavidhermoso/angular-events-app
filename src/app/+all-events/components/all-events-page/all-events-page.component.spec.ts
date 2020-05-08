import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEventsPageComponent } from './all-events-page.component';

describe('AllEventsPageComponent', () => {
  let component: AllEventsPageComponent;
  let fixture: ComponentFixture<AllEventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEventsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
