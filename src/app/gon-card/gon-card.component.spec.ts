import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GonCardComponent } from './gon-card.component';
import {MaterialModule} from "../app.material";
import {RouterTestingModule} from "@angular/router/testing";

describe('GonCardComponent', () => {
  let component: GonCardComponent;
  let fixture: ComponentFixture<GonCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            RouterTestingModule
        ],
        declarations: [
            GonCardComponent,
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
