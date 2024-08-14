import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PosterPagePage } from './poster-page.page';

describe('PosterPagePage', () => {
  let component: PosterPagePage;
  let fixture: ComponentFixture<PosterPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PosterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
