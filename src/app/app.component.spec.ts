import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MaterialModule} from "./app.material";
import {GonButtonComponent} from "./gon-button/gon-button.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {GonCardComponent} from "./gon-card/gon-card.component";
import {GonFooterComponent} from "./gon-footer/gon-footer.component";
import {ToTopComponent} from "./to-top/to-top.component";
describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
      ],
      declarations: [
        AppComponent,
          GonButtonComponent,
          SidebarComponent,
          GonCardComponent,
          GonFooterComponent,
          ToTopComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
