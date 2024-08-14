import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditLocationPickPage } from './edit-location-pick.page';

describe('EditLocationPickPage', () => {
  let component: EditLocationPickPage;
  let fixture: ComponentFixture<EditLocationPickPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditLocationPickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
