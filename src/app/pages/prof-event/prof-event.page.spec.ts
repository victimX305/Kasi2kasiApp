import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfEventPage } from './prof-event.page';

describe('ProfEventPage', () => {
  let component: ProfEventPage;
  let fixture: ComponentFixture<ProfEventPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
