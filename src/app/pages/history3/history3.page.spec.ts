import { ComponentFixture, TestBed } from '@angular/core/testing';
import { History3Page } from './history3.page';

describe('History3Page', () => {
  let component: History3Page;
  let fixture: ComponentFixture<History3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(History3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
