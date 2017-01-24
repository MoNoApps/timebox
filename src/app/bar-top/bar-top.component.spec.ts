/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarTopComponent } from './bar-top.component';

describe('BarTopComponent', () => {
  let component: BarTopComponent;
  let fixture: ComponentFixture<BarTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
