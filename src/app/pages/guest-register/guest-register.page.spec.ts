import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestRegisterPage } from './guest-register.page';

describe('GuestRegisterPage', () => {
  let component: GuestRegisterPage;
  let fixture: ComponentFixture<GuestRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuestRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
