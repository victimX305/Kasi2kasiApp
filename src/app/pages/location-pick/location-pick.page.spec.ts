import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationPickPage } from './location-pick.page';

describe('LocationPickPage', () => {
  let component: LocationPickPage;
  let fixture: ComponentFixture<LocationPickPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocationPickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
