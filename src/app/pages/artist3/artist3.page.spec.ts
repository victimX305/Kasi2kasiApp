import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Artist3Page } from './artist3.page';

describe('Artist3Page', () => {
  let component: Artist3Page;
  let fixture: ComponentFixture<Artist3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Artist3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
