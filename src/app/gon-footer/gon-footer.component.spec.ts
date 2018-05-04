import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GonFooterComponent } from './gon-footer.component';

describe('GonFooterComponent', () => {
  let component: GonFooterComponent;
  let fixture: ComponentFixture<GonFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GonFooterComponent ]
    })
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
