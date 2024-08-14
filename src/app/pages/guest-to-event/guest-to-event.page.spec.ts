import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestToEventPage } from './guest-to-event.page';

describe('GuestToEventPage', () => {
  let component: GuestToEventPage;
  let fixture: ComponentFixture<GuestToEventPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuestToEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
