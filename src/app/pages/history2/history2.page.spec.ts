import { ComponentFixture, TestBed } from '@angular/core/testing';
import { History2Page } from './history2.page';

describe('History2Page', () => {
  let component: History2Page;
  let fixture: ComponentFixture<History2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(History2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
