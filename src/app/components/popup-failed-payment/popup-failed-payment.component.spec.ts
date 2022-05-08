import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFailedPaymentComponent } from './popup-failed-payment.component';

describe('PopupFailedPaymentComponent', () => {
  let component: PopupFailedPaymentComponent;
  let fixture: ComponentFixture<PopupFailedPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupFailedPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupFailedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
