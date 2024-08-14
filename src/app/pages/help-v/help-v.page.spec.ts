import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpVPage } from './help-v.page';

describe('HelpVPage', () => {
  let component: HelpVPage;
  let fixture: ComponentFixture<HelpVPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelpVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
