import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListPage } from './admin-list.page';

describe('AdminListPage', () => {
  let component: AdminListPage;
  let fixture: ComponentFixture<AdminListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
