import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEvents2Page } from './edit-events2.page';

describe('EditEvents2Page', () => {
  let component: EditEvents2Page;
  let fixture: ComponentFixture<EditEvents2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditEvents2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
