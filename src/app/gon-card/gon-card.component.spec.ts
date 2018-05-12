import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GonCardComponent } from './gon-card.component';

describe('GonCardComponent', () => {
  let component: GonCardComponent;
  let fixture: ComponentFixture<GonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
