import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PatchesComponent } from './patches.component';
import {FaqComponent} from "../faq/faq.component";
import {RouterTestingModule} from "@angular/router/testing";
import {MaterialModule} from "../../app.material";
import {GonCardComponent} from "../../gon-card/gon-card.component";
import {GonButtonComponent} from "../../gon-button/gon-button.component";

describe('PatchesComponent', () => {
  let component: PatchesComponent;
  let fixture: ComponentFixture<PatchesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            RouterTestingModule
        ],
        declarations: [PatchesComponent,
            GonButtonComponent,
            GonCardComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
