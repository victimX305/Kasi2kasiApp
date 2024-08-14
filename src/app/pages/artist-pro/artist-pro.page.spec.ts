import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistProPage } from './artist-pro.page';

describe('ArtistProPage', () => {
  let component: ArtistProPage;
  let fixture: ComponentFixture<ArtistProPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArtistProPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
