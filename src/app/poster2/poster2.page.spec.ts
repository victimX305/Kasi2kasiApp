import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Poster2Page } from './poster2.page';

describe('Poster2Page', () => {
  let component: Poster2Page;
  let fixture: ComponentFixture<Poster2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Poster2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
