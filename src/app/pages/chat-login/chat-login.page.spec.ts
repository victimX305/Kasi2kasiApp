import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatLoginPage } from './chat-login.page';

describe('ChatLoginPage', () => {
  let component: ChatLoginPage;
  let fixture: ComponentFixture<ChatLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
