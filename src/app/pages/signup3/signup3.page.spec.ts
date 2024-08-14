import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Signup3Page } from './signup3.page';

describe('Signup3Page', () => {
  let component: Signup3Page;
  let fixture: ComponentFixture<Signup3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Signup3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
