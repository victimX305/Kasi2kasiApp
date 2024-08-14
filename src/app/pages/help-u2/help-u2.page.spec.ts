import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpU2Page } from './help-u2.page';

describe('HelpU2Page', () => {
  let component: HelpU2Page;
  let fixture: ComponentFixture<HelpU2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelpU2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
