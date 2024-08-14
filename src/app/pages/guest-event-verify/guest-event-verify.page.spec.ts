import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestEventVerifyPage } from './guest-event-verify.page';

describe('GuestEventVerifyPage', () => {
  let component: GuestEventVerifyPage;
  let fixture: ComponentFixture<GuestEventVerifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuestEventVerifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
