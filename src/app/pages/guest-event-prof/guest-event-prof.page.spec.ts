import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestEventProfPage } from './guest-event-prof.page';

describe('GuestEventProfPage', () => {
  let component: GuestEventProfPage;
  let fixture: ComponentFixture<GuestEventProfPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuestEventProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
