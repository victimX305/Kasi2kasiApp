import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreckPage } from './preck.page';

describe('PreckPage', () => {
  let component: PreckPage;
  let fixture: ComponentFixture<PreckPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
