import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Artist4Page } from './artist4.page';

describe('Artist4Page', () => {
  let component: Artist4Page;
  let fixture: ComponentFixture<Artist4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Artist4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
