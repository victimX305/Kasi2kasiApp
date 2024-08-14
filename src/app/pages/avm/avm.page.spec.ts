import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvmPage } from './avm.page';

describe('AvmPage', () => {
  let component: AvmPage;
  let fixture: ComponentFixture<AvmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AvmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
