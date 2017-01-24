/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RangeRowComponent } from './range-row.component';

describe('RangeRowComponent', () => {
  let component: RangeRowComponent;
  let fixture: ComponentFixture<RangeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
