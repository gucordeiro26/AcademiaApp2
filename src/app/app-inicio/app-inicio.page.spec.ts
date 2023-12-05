import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppInicioPage } from './app-inicio.page';

describe('AppInicioPage', () => {
  let component: AppInicioPage;
  let fixture: ComponentFixture<AppInicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
