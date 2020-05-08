import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTagComponent } from './free-tag.component';

describe('FreeTagComponent', () => {
  let component: FreeTagComponent;
  let fixture: ComponentFixture<FreeTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
