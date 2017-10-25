import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileApplicationComponent } from './mobile-application.component';

describe('MobileApplicationComponent', () => {
  let component: MobileApplicationComponent;
  let fixture: ComponentFixture<MobileApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
