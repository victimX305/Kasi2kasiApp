import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestListPage } from './guest-list.page';

describe('GuestListPage', () => {
  let component: GuestListPage;
  let fixture: ComponentFixture<GuestListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuestListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
