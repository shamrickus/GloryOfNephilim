import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToTopComponent } from './to-top.component';
import {MaterialModule} from "../app.material";
import {RouterTestingModule} from "@angular/router/testing";

describe('ToTopComponent', () => {
  let component: ToTopComponent;
  let fixture: ComponentFixture<ToTopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        imports: [MaterialModule, RouterTestingModule],
      declarations: [ ToTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
