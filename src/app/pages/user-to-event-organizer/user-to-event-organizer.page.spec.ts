import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserToEventOrganizerPage } from './user-to-event-organizer.page';

describe('UserToEventOrganizerPage', () => {
  let component: UserToEventOrganizerPage;
  let fixture: ComponentFixture<UserToEventOrganizerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserToEventOrganizerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
