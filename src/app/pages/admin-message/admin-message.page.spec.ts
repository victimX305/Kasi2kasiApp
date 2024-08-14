import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminMessagePage } from './admin-message.page';

describe('AdminMessagePage', () => {
  let component: AdminMessagePage;
  let fixture: ComponentFixture<AdminMessagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
