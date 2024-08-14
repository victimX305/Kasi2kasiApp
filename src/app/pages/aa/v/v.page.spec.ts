import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VPage } from './v.page';

describe('VPage', () => {
  let component: VPage;
  let fixture: ComponentFixture<VPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
