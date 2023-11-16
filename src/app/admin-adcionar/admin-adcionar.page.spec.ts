import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAdcionarPage } from './admin-adcionar.page';

describe('AdminAdcionarPage', () => {
  let component: AdminAdcionarPage;
  let fixture: ComponentFixture<AdminAdcionarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminAdcionarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
