import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Deactivate2Page } from './deactivate2.page';

describe('Deactivate2Page', () => {
  let component: Deactivate2Page;
  let fixture: ComponentFixture<Deactivate2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Deactivate2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
