import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {FaqComponent} from './faq.component';
import {GonButtonComponent} from "../../gon-button/gon-button.component";
import {GonCardComponent} from "../../gon-card/gon-card.component";
import {MaterialModule} from "../../app.material";
import {RouterTestingModule} from "@angular/router/testing";

describe('FaqComponent', () => {
    let component: FaqComponent;
    let fixture: ComponentFixture<FaqComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                RouterTestingModule
            ],
            declarations: [FaqComponent,
                GonButtonComponent,
                GonCardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FaqComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
