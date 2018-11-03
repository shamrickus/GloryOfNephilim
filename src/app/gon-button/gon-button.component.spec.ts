import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GonButtonComponent } from './gon-button.component';
import {MaterialModule} from "../app.material";
import {GonCardComponent} from "../gon-card/gon-card.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('GonButtonComponent', () => {
  let component: GonButtonComponent;
  let fixture: ComponentFixture<GonButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            RouterTestingModule
        ],
        declarations: [
            GonButtonComponent,
            GonCardComponent,
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
