import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeEventGuestPage } from './home-event-guest.page';

describe('HomeEventGuestPage', () => {
  let component: HomeEventGuestPage;
  let fixture: ComponentFixture<HomeEventGuestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeEventGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
