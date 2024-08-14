import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestEventDetailsPage } from './guest-event-details.page';

describe('GuestEventDetailsPage', () => {
  let component: GuestEventDetailsPage;
  let fixture: ComponentFixture<GuestEventDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuestEventDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
