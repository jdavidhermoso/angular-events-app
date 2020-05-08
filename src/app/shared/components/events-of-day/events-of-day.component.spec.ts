import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsOfDayComponent } from './events-of-day.component';

describe('EventsOfDayComponent', () => {
  let component: EventsOfDayComponent;
  let fixture: ComponentFixture<EventsOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
