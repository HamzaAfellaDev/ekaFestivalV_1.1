import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSuccessfulPaymentComponent } from './popup-successful-payment.component';

describe('PopupSuccessfulPaymentComponent', () => {
  let component: PopupSuccessfulPaymentComponent;
  let fixture: ComponentFixture<PopupSuccessfulPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSuccessfulPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSuccessfulPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
