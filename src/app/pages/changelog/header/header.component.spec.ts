import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MaterialModule} from "../../../app.material";
import {ChangeComponent} from "../change/change.component";
import {ChangelogComponent} from "../changelog.component";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            RouterTestingModule
        ],
        declarations: [
            HeaderComponent
        ],    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
