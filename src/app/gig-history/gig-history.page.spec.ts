import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GigHistoryPage } from './gig-history.page';

describe('GigHistoryPage', () => {
  let component: GigHistoryPage;
  let fixture: ComponentFixture<GigHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GigHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
