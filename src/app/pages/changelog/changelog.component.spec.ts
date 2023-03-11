import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChangelogComponent } from './changelog.component';
import {GonButtonComponent} from "../../gon-button/gon-button.component";
import {RouterTestingModule} from "@angular/router/testing";
import {GonCardComponent} from "../../gon-card/gon-card.component";
import {MaterialModule} from "../../app.material";
import { MatIconModule } from "@angular/material/icon";
import {HeaderComponent} from "./header/header.component";
import {ChangeComponent} from "./change/change.component";

describe('ChangelogComponent', () => {
  let component: ChangelogComponent;
  let fixture: ComponentFixture<ChangelogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            RouterTestingModule
        ],
        declarations: [
            ChangelogComponent,
            GonButtonComponent,
            GonCardComponent,
            ChangeComponent,
            HeaderComponent
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
