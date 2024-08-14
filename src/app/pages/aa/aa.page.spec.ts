import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AaPage } from './aa.page';

describe('AaPage', () => {
  let component: AaPage;
  let fixture: ComponentFixture<AaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
