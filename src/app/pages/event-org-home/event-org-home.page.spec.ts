import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventOrgHomePage } from './event-org-home.page';

describe('EventOrgHomePage', () => {
  let component: EventOrgHomePage;
  let fixture: ComponentFixture<EventOrgHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EventOrgHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
