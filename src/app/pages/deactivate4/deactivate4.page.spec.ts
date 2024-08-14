import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Deactivate4Page } from './deactivate4.page';

describe('Deactivate4Page', () => {
  let component: Deactivate4Page;
  let fixture: ComponentFixture<Deactivate4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Deactivate4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
