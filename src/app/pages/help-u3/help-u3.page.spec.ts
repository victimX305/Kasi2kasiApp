import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpU3Page } from './help-u3.page';

describe('HelpU3Page', () => {
  let component: HelpU3Page;
  let fixture: ComponentFixture<HelpU3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelpU3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
