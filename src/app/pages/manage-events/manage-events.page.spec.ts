import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageEventsPage } from './manage-events.page';

describe('ManageEventsPage', () => {
  let component: ManageEventsPage;
  let fixture: ComponentFixture<ManageEventsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManageEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
