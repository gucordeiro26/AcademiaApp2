import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTreinoExePage } from './app-treino-exe.page';

describe('AppTreinoExePage', () => {
  let component: AppTreinoExePage;
  let fixture: ComponentFixture<AppTreinoExePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppTreinoExePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
