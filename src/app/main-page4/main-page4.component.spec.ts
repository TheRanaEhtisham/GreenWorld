import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPage4Component } from './main-page4.component';

describe('MainPage4Component', () => {
  let component: MainPage4Component;
  let fixture: ComponentFixture<MainPage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPage4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
