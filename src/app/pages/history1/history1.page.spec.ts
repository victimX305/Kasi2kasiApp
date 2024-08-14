import { ComponentFixture, TestBed } from '@angular/core/testing';
import { History1Page } from './history1.page';

describe('History1Page', () => {
  let component: History1Page;
  let fixture: ComponentFixture<History1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(History1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
