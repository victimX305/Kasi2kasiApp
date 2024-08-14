import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Artist2Page } from './artist2.page';

describe('Artist2Page', () => {
  let component: Artist2Page;
  let fixture: ComponentFixture<Artist2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Artist2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
