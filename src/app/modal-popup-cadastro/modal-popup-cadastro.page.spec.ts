import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalPopupCadastroPage } from './modal-popup-cadastro.page';

describe('ModalPopupCadastroPage', () => {
  let component: ModalPopupCadastroPage;
  let fixture: ComponentFixture<ModalPopupCadastroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalPopupCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
