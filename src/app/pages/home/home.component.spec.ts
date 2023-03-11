import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {GonButtonComponent} from "../../gon-button/gon-button.component";
import {RouterTestingModule} from "@angular/router/testing";
import {GonCardComponent} from "../../gon-card/gon-card.component";
import {MaterialModule} from "../../app.material";

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                RouterTestingModule
            ],
            declarations: [HomeComponent,
                GonButtonComponent,
                GonCardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
