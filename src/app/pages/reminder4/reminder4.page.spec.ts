import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reminder4Page } from './reminder4.page';

describe('Reminder4Page', () => {
  let component: Reminder4Page;
  let fixture: ComponentFixture<Reminder4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Reminder4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
