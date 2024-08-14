import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventOrganizerPage } from './event-organizer.page';

describe('EventOrganizerPage', () => {
  let component: EventOrganizerPage;
  let fixture: ComponentFixture<EventOrganizerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EventOrganizerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
