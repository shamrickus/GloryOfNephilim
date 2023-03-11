import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChangeComponent } from './change.component';
import {RouterTestingModule} from "@angular/router/testing";
import {GonButtonComponent} from "../../../gon-button/gon-button.component";
import {MaterialModule} from "../../../app.material";
import {ChangelogComponent} from "../changelog.component";
import {GonCardComponent} from "../../../gon-card/gon-card.component";
import {HeaderComponent} from "../header/header.component";

describe('ChangeComponent', () => {
  let component: ChangeComponent;
  let fixture: ComponentFixture<ChangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            RouterTestingModule
        ],
        declarations: [
            ChangeComponent,
            ChangelogComponent,
            GonButtonComponent,
            GonCardComponent,
            HeaderComponent
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
