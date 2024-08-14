import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestRegPage } from './guest-reg.page';

describe('GuestRegPage', () => {
  let component: GuestRegPage;
  let fixture: ComponentFixture<GuestRegPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuestRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
