import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminExerciciosPage } from './admin-exercicios.page';

describe('AdminExerciciosPage', () => {
  let component: AdminExerciciosPage;
  let fixture: ComponentFixture<AdminExerciciosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminExerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
