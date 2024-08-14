import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestVerifyPage } from './guest-verify.page';

describe('GuestVerifyPage', () => {
  let component: GuestVerifyPage;
  let fixture: ComponentFixture<GuestVerifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuestVerifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
