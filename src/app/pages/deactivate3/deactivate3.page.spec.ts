import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Deactivate3Page } from './deactivate3.page';

describe('Deactivate3Page', () => {
  let component: Deactivate3Page;
  let fixture: ComponentFixture<Deactivate3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Deactivate3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
