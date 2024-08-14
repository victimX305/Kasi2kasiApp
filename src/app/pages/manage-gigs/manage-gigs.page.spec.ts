import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageGigsPage } from './manage-gigs.page';

describe('ManageGigsPage', () => {
  let component: ManageGigsPage;
  let fixture: ComponentFixture<ManageGigsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManageGigsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
