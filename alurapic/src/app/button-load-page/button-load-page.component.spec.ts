import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoadPageComponent } from './button-load-page.component';

describe('ButtonLoadPageComponent', () => {
  let component: ButtonLoadPageComponent;
  let fixture: ComponentFixture<ButtonLoadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLoadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLoadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
