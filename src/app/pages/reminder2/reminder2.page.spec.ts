import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reminder2Page } from './reminder2.page';

describe('Reminder2Page', () => {
  let component: Reminder2Page;
  let fixture: ComponentFixture<Reminder2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Reminder2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
