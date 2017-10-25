import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseAppDevComponent } from './enterprise-app-dev.component';

describe('EnterpriseAppDevComponent', () => {
  let component: EnterpriseAppDevComponent;
  let fixture: ComponentFixture<EnterpriseAppDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseAppDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseAppDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
