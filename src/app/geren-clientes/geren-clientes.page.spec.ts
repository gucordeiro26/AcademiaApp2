import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GerenClientesPage } from './geren-clientes.page';

describe('GerenClientesPage', () => {
  let component: GerenClientesPage;
  let fixture: ComponentFixture<GerenClientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GerenClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
