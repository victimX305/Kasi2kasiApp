import { NgModule } from '@angular/core';
//import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './components/chats/chats.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'chating',
    loadChildren: () => import('./pages/chating/chating.module').then( m => m.ChatingPageModule)
  },
  
  {
    path: 'chat-login',
    loadChildren: () => import('./pages/chat-login/chat-login.module').then( m => m.ChatLoginPageModule)
  },
  {
    path: 'chat-signup',
    loadChildren: () => import('./pages/chat-signup/chat-signup.module').then( m => m.ChatSignupPageModule)
  },
  {
    path: 'preck',
    loadChildren: () => import('./pages/preck/preck.module').then( m => m.PreckPageModule)
  },

  {
    path: 'chat-signup1',
    loadChildren: () => import('./pages/chat-signup1/chat-signup1.module').then( m => m.ChatSignup1PageModule)
  },
  {
    path: 'login1',
    loadChildren: () => import('./pages/login1/login1.module').then( m => m.Login1PageModule)
  },
  
  {
    path: 'guest-register',
    loadChildren: () => import('./pages/guest-register/guest-register.module').then( m => m.GuestRegisterPageModule)
  },
  {
    path: 'signup2',
    loadChildren: () => import('./pages/signup2/signup2.module').then( m => m.Signup2PageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./pages/login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'user-home',
    loadChildren: () => import('./pages/user-home/user-home.module').then( m => m.UserHomePageModule)
  },
  {
    path: 'poster-page',
    loadChildren: () => import('./pages/poster-page/poster-page.module').then( m => m.PosterPagePageModule)
  },
  {
    path: 'artist-pro',
    loadChildren: () => import('./pages/artist-pro/artist-pro.module').then( m => m.ArtistProPageModule)
  },
  {
    path: 'artist2',
    loadChildren: () => import('./pages/artist2/artist2.module').then( m => m.Artist2PageModule)
  },
  {
    path: 'artist3',
    loadChildren: () => import('./pages/artist3/artist3.module').then( m => m.Artist3PageModule)
  },
  {
    path: 'artist4',
    loadChildren: () => import('./pages/artist4/artist4.module').then( m => m.Artist4PageModule)
  },
  {
    path: 'artists',
    loadChildren: () => import('./pages/artists/artists.module').then( m => m.ArtistsPageModule)
  },
  {
    path: 'create-event',
    loadChildren: () => import('./pages/create-event/create-event.module').then( m => m.CreateEventPageModule)
  },
  {
    path: 'create-event2',
    loadChildren: () => import('./pages/create-event2/create-event2.module').then( m => m.CreateEvent2PageModule)
  },
  {
    path: 'deactivate2',
    loadChildren: () => import('./pages/deactivate2/deactivate2.module').then( m => m.Deactivate2PageModule)
  },
  {
    path: 'deactivate3',
    loadChildren: () => import('./pages/deactivate3/deactivate3.module').then( m => m.Deactivate3PageModule)
  },
  {
    path: 'deactivate4',
    loadChildren: () => import('./pages/deactivate4/deactivate4.module').then( m => m.Deactivate4PageModule)
  },
 
  {
    path: 'event-details',
    loadChildren: () => import('./pages/event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'event-org-home',
    loadChildren: () => import('./pages/event-org-home/event-org-home.module').then( m => m.EventOrgHomePageModule)
  },
  {
    path: 'event-organizer',
    loadChildren: () => import('./pages/event-organizer/event-organizer.module').then( m => m.EventOrganizerPageModule)
  },
  {
    path: 'guest-event-prof',
    loadChildren: () => import('./pages/guest-event-prof/guest-event-prof.module').then( m => m.GuestEventProfPageModule)
  },
  {
    path: 'guest-home',
    loadChildren: () => import('./pages/guest-home/guest-home.module').then( m => m.GuestHomePageModule)
  },
  {
    path: 'guest-list',
    loadChildren: () => import('./pages/guest-list/guest-list.module').then( m => m.GuestListPageModule)
  },
  {
    path: 'help-u',
    loadChildren: () => import('./pages/help-u/help-u.module').then( m => m.HelpUPageModule)
  },
  {
    path: 'help-u2',
    loadChildren: () => import('./pages/help-u2/help-u2.module').then( m => m.HelpU2PageModule)
  },
  {
    path: 'help-u3',
    loadChildren: () => import('./pages/help-u3/help-u3.module').then( m => m.HelpU3PageModule)
  },
  {
    path: 'help-u4',
    loadChildren: () => import('./pages/help-u4/help-u4.module').then( m => m.HelpU4PageModule)
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./pages/home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },
  {
    path: 'home-event-guest',
    loadChildren: () => import('./pages/home-event-guest/home-event-guest.module').then( m => m.HomeEventGuestPageModule)
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./pages/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
 
  {
    path: 'manage-events',
    loadChildren: () => import('./pages/manage-events/manage-events.module').then( m => m.ManageEventsPageModule)
  },
  {
    path: 'manage-events2',
    loadChildren: () => import('./pages/manage-events2/manage-events2.module').then( m => m.ManageEvents2PageModule)
  },
  {
    path: 'manage-gigs',
    loadChildren: () => import('./pages/manage-gigs/manage-gigs.module').then( m => m.ManageGigsPageModule)
  },
  {
    path: 'manage-gigs2',
    loadChildren: () => import('./pages/manage-gigs2/manage-gigs2.module').then( m => m.ManageGigs2PageModule)
  },
  
  {
    path: 'password-reset',
    loadChildren: () => import('./pages/password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'prof-event',
    loadChildren: () => import('./pages/prof-event/prof-event.module').then( m => m.ProfEventPageModule)
  },
  {
    path: 'prof-user',
    loadChildren: () => import('./pages/prof-user/prof-user.module').then( m => m.ProfUserPageModule)
  },
  {
    path: 'edit-event/:documentId',
    loadChildren: () => import('./pages/edit-events/edit-events.module').then( m => m.EditEventsPageModule)
  },
  {
    path: 'edit-location-pick',
    loadChildren: () => import('./pages/edit-location-pick/edit-location-pick.module').then( m => m.EditLocationPickPageModule)
  },
  {
    path: 'location-pick',
    loadChildren: () => import('./pages/location-pick/location-pick.module').then( m => m.LocationPickPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'landing2',
    loadChildren: () => import('./pages/landing2/landing2.module').then( m => m.Landing2PageModule)
  },
  {
    path: 'signup3',
    loadChildren: () => import('./pages/signup3/signup3.module').then( m => m.Signup3PageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'admin-help',
    loadChildren: () => import('./pages/admin-help/admin-help.module').then( m => m.AdminHelpPageModule)
  },
  {
    path: 'admin-message',
    loadChildren: () => import('./pages/admin-message/admin-message.module').then( m => m.AdminMessagePageModule)
  },
  {
    path: 'edit-events2/:documentId',
    loadChildren: () => import('./pages/edit-events2/edit-events2.module').then( m => m.EditEvents2PageModule)
  },
  {
    path: 'edit-guest-list',
    loadChildren: () => import('./pages/edit-guest-list/edit-guest-list.module').then( m => m.EditGuestListPageModule)
  },
  {
    path: 'email-verification',
    loadChildren: () => import('./pages/email-verification/email-verification.module').then( m => m.EmailVerificationPageModule)
  },
 
  {
    path: 'guest-details-page',
    loadChildren: () => import('./pages/guest-details-page/guest-details-page.module').then( m => m.GuestDetailsPagePageModule)
  },
  {
    path: 'guest-event-details',
    loadChildren: () => import('./pages/guest-event-details/guest-event-details.module').then( m => m.GuestEventDetailsPageModule)
  },
  {
    path: 'guest-event-verify',
    loadChildren: () => import('./pages/guest-event-verify/guest-event-verify.module').then( m => m.GuestEventVerifyPageModule)
  },
  {
    path: 'guest-to-event',
    loadChildren: () => import('./pages/guest-to-event/guest-to-event.module').then( m => m.GuestToEventPageModule)
  },
  {
    path: 'guest-verify',
    loadChildren: () => import('./pages/guest-verify/guest-verify.module').then( m => m.GuestVerifyPageModule)
  },
  {
    path: 'help-see',
    loadChildren: () => import('./pages/help-see/help-see.module').then( m => m.HelpSeePageModule)
  },
  {
    path: 'help-v',
    loadChildren: () => import('./pages/help-v/help-v.module').then( m => m.HelpVPageModule)
  },
  {
    path: 'history1',
    loadChildren: () => import('./pages/history1/history1.module').then( m => m.History1PageModule)
  },
  {
    path: 'history2',
    loadChildren: () => import('./pages/history2/history2.module').then( m => m.History2PageModule)
  },
  {
    path: 'history3',
    loadChildren: () => import('./pages/history3/history3.module').then( m => m.History3PageModule)
  },
  {
    path: 'history4',
    loadChildren: () => import('./pages/history4/history4.module').then( m => m.History4PageModule)
  },
  {
    path: 'prof-guest',
    loadChildren: () => import('./pages/prof-guest/prof-guest.module').then( m => m.ProfGuestPageModule)
  },
  {
    path: 'reminder1',
    loadChildren: () => import('./pages/reminder1/reminder1.module').then( m => m.Reminder1PageModule)
  },
  {
    path: 'reminder2',
    loadChildren: () => import('./pages/reminder2/reminder2.module').then( m => m.Reminder2PageModule)
  },
  {
    path: 'reminder3',
    loadChildren: () => import('./pages/reminder3/reminder3.module').then( m => m.Reminder3PageModule)
  },
  {
    path: 'reminder4',
    loadChildren: () => import('./pages/reminder4/reminder4.module').then( m => m.Reminder4PageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./pages/user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'verify-guest',
    loadChildren: () => import('./pages/verify-guest/verify-guest.module').then( m => m.VerifyGuestPageModule)
  },
  {
    path: 'verify-guest-event',
    loadChildren: () => import('./pages/verify-guest-event/verify-guest-event.module').then( m => m.VerifyGuestEventPageModule)
  },
  {
    path: 'verify-pro',
    loadChildren: () => import('./pages/verify-pro/verify-pro.module').then( m => m.VerifyProPageModule)
  },
  {
    path: 'home-user',
    loadChildren: () => import('./home-user/home-user.module').then( m => m.HomeUserPageModule)
  },
  {
    path: 'event-org-home',
    loadChildren: () => import('./pages/event-org-home/event-org-home.module').then( m => m.EventOrgHomePageModule)
  },
  {
    path: 'guest-reg',
    loadChildren: () => import('./pages/guest-reg/guest-reg.module').then( m => m.GuestRegPageModule)
  },
  { path: 'chats/:roomId',
  loadChildren: () => import('./pages/chats/chats.module').then(m => m.ChatsPageModule)
 },
  {
    path: 'poster-page2',
    loadChildren: () => import('./pages/poster-page2/poster-page2.module').then( m => m.PosterPage2PageModule)
  },
  {
    path: 'image-modal',
    loadChildren: () => import('./image-modal/image-modal.module').then( m => m.ImageModalPageModule)
  },
  
  {
    path: 'gig-history',
    loadChildren: () => import('./gig-history/gig-history.module').then( m => m.GigHistoryPageModule)
  },
  {
    path: 'deactivate-account',
    loadChildren: () => import('./deactivate-account/deactivate-account.module').then( m => m.DeactivateAccountPageModule)
  },
  {
    path: 'poster2',
    loadChildren: () => import('./poster2/poster2.module').then( m => m.Poster2PageModule)
  },
  {
    path: 'poster3',
    loadChildren: () => import('./poster3/poster3.module').then( m => m.Poster3PageModule)
  },
  {
    path: 'user-to-event-organizer',
    loadChildren: () => import('./pages/user-to-event-organizer/user-to-event-organizer.module').then( m => m.UserToEventOrganizerPageModule)
  },
  {
    path: 'user-to-guest',
    loadChildren: () => import('./pages/user-to-guest/user-to-guest.module').then( m => m.UserToGuestPageModule)
  },
  {
    path: 'background-settings',
    loadChildren: () => import('./pages/background-settings/background-settings.module').then( m => m.BackgroundSettingsPageModule)
  },
  {
    path: 'aa',
    loadChildren: () => import('./pages/aa/aa.module').then( m => m.AaPageModule)
  },
  {
    path: 'v',
    loadChildren: () => import('./pages/v/v.module').then( m => m.VPageModule)
  },
  {
    path: 'guards',
    loadChildren: () => import('./guards/guards.module').then( m => m.GuardsPageModule)
  },
  {
    path: 'av',
    loadChildren: () => import('./pages/av/av.module').then( m => m.AvPageModule)
  },
  {
    path: 'avm',
    loadChildren: () => import('./pages/avm/avm.module').then( m => m.AvmPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
