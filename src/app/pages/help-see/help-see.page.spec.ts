import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpSeePage } from './help-see.page';

describe('HelpSeePage', () => {
  let component: HelpSeePage;
  let fixture: ComponentFixture<HelpSeePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelpSeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
