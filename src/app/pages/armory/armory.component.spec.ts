import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArmoryComponent } from './armory.component';
import {GonButtonComponent} from "../../gon-button/gon-button.component";
import {GonFooterComponent} from "../../gon-footer/gon-footer.component";
import {MaterialModule} from "../../app.material";
import {RouterTestingModule} from "@angular/router/testing";
import {GonCardComponent} from "../../gon-card/gon-card.component";
import {SidebarComponent} from "../../sidebar/sidebar.component";
import {ToTopComponent} from "../../to-top/to-top.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import 'hammerjs';

describe('ArmoryComponent', () => {
  let component: ArmoryComponent;
  let fixture: ComponentFixture<ArmoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MaterialModule,
		FormsModule
      ],
      declarations: [
          ArmoryComponent,
          GonButtonComponent,
          GonCardComponent,
      ],    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
