import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PosterPage2Page } from './poster-page2.page';

describe('PosterPage2Page', () => {
  let component: PosterPage2Page;
  let fixture: ComponentFixture<PosterPage2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PosterPage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
