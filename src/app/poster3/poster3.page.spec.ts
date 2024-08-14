import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Poster3Page } from './poster3.page';

describe('Poster3Page', () => {
  let component: Poster3Page;
  let fixture: ComponentFixture<Poster3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Poster3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
