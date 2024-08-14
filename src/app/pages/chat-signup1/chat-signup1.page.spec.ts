import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatSignup1Page } from './chat-signup1.page';

describe('ChatSignup1Page', () => {
  let component: ChatSignup1Page;
  let fixture: ComponentFixture<ChatSignup1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatSignup1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
