import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatSignupPage } from './chat-signup.page';

describe('ChatSignupPage', () => {
  let component: ChatSignupPage;
  let fixture: ComponentFixture<ChatSignupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
