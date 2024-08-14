import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyGuestPage } from './verify-guest.page';

describe('VerifyGuestPage', () => {
  let component: VerifyGuestPage;
  let fixture: ComponentFixture<VerifyGuestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerifyGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
