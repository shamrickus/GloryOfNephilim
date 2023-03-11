import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GonFooterComponent } from './gon-footer.component';
import {MaterialModule} from "../app.material";
import {RouterTestingModule} from "@angular/router/testing";
import {GonButtonComponent} from "../gon-button/gon-button.component";
import {GonCardComponent} from "../gon-card/gon-card.component";

describe('GonFooterComponent', () => {
  let component: GonFooterComponent;
  let fixture: ComponentFixture<GonFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [
            MaterialModule,
            RouterTestingModule
        ],
        declarations: [
            GonFooterComponent,
            GonCardComponent,
        ],    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
