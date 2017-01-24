/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimeYearComponent } from './time-year.component';

describe('TimeYearComponent', () => {
  let component: TimeYearComponent;
  let fixture: ComponentFixture<TimeYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
