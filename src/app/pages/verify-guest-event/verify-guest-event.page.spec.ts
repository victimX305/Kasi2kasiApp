import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyGuestEventPage } from './verify-guest-event.page';

describe('VerifyGuestEventPage', () => {
  let component: VerifyGuestEventPage;
  let fixture: ComponentFixture<VerifyGuestEventPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerifyGuestEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
