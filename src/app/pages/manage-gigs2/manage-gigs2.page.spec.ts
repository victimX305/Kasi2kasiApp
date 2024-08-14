import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageGigs2Page } from './manage-gigs2.page';

describe('ManageGigs2Page', () => {
  let component: ManageGigs2Page;
  let fixture: ComponentFixture<ManageGigs2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManageGigs2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
