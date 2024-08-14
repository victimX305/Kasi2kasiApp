import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reminder1Page } from './reminder1.page';

describe('Reminder1Page', () => {
  let component: Reminder1Page;
  let fixture: ComponentFixture<Reminder1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Reminder1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
