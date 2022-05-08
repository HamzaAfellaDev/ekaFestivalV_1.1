import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddFoundsComponent } from './popup-add-founds.component';

describe('PopupAddFoundsComponent', () => {
  let component: PopupAddFoundsComponent;
  let fixture: ComponentFixture<PopupAddFoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAddFoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddFoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
