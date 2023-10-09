import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppPerfilPage } from './app-perfil.page';

describe('AppPerfilPage', () => {
  let component: AppPerfilPage;
  let fixture: ComponentFixture<AppPerfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
