import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestHomePage } from './guest-home.page';

describe('GuestHomePage', () => {
  let component: GuestHomePage;
  let fixture: ComponentFixture<GuestHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuestHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
