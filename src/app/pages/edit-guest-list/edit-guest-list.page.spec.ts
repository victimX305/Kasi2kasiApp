import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditGuestListPage } from './edit-guest-list.page';

describe('EditGuestListPage', () => {
  let component: EditGuestListPage;
  let fixture: ComponentFixture<EditGuestListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditGuestListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
