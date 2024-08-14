import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestDetailsPagePage } from './guest-details-page.page';

describe('GuestDetailsPagePage', () => {
  let component: GuestDetailsPagePage;
  let fixture: ComponentFixture<GuestDetailsPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuestDetailsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
