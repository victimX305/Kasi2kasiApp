import { ComponentFixture, TestBed } from '@angular/core/testing';
import { History4Page } from './history4.page';

describe('History4Page', () => {
  let component: History4Page;
  let fixture: ComponentFixture<History4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(History4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
