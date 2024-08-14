import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvPage } from './av.page';

describe('AvPage', () => {
  let component: AvPage;
  let fixture: ComponentFixture<AvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
