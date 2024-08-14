import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpU4Page } from './help-u4.page';

describe('HelpU4Page', () => {
  let component: HelpU4Page;
  let fixture: ComponentFixture<HelpU4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelpU4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
