import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateEvent2Page } from './create-event2.page';

describe('CreateEvent2Page', () => {
  let component: CreateEvent2Page;
  let fixture: ComponentFixture<CreateEvent2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateEvent2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
