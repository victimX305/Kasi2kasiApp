import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyProPage } from './verify-pro.page';

describe('VerifyProPage', () => {
  let component: VerifyProPage;
  let fixture: ComponentFixture<VerifyProPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerifyProPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
