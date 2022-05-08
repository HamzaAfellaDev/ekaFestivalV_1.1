import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRedirectComponent } from './popup-redirect.component';

describe('PopupRedirectComponent', () => {
  let component: PopupRedirectComponent;
  let fixture: ComponentFixture<PopupRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
