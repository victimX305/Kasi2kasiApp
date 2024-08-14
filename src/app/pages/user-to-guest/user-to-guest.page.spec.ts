import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserToGuestPage } from './user-to-guest.page';

describe('UserToGuestPage', () => {
  let component: UserToGuestPage;
  let fixture: ComponentFixture<UserToGuestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserToGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
