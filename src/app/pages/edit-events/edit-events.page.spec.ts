import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEventsPage } from './edit-events.page';

describe('EditEventsPage', () => {
  let component: EditEventsPage;
  let fixture: ComponentFixture<EditEventsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
