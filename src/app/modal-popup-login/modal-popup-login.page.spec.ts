import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalPopupLoginPage } from './modal-popup-login.page';

describe('ModalPopupLoginPage', () => {
  let component: ModalPopupLoginPage;
  let fixture: ComponentFixture<ModalPopupLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalPopupLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
