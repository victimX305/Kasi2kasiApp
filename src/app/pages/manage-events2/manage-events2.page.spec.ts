import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageEvents2Page } from './manage-events2.page';

describe('ManageEvents2Page', () => {
  let component: ManageEvents2Page;
  let fixture: ComponentFixture<ManageEvents2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManageEvents2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
