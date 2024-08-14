import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpUPage } from './help-u.page';

describe('HelpUPage', () => {
  let component: HelpUPage;
  let fixture: ComponentFixture<HelpUPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelpUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
