import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTreinoPage } from './app-treino.page';

describe('AppTreinoPage', () => {
  let component: AppTreinoPage;
  let fixture: ComponentFixture<AppTreinoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
