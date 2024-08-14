import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reminder3Page } from './reminder3.page';

describe('Reminder3Page', () => {
  let component: Reminder3Page;
  let fixture: ComponentFixture<Reminder3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Reminder3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
