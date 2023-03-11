import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import {MaterialModule} from "../app.material";
import {Route} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {GonButtonComponent} from "../gon-button/gon-button.component";
import {GonCardComponent} from "../gon-card/gon-card.component";

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        imports: [MaterialModule,
         RouterTestingModule],
      declarations: [ SidebarComponent,
      GonButtonComponent,
      GonCardComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
