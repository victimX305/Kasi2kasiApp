import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfUserPage } from './prof-user.page';

describe('ProfUserPage', () => {
  let component: ProfUserPage;
  let fixture: ComponentFixture<ProfUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
