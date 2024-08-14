import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfGuestPage } from './prof-guest.page';

describe('ProfGuestPage', () => {
  let component: ProfGuestPage;
  let fixture: ComponentFixture<ProfGuestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
