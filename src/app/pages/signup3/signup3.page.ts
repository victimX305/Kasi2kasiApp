import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.page.html',
  styleUrls: ['./signup3.page.scss'],
})
export class Signup3Page implements OnInit {
  showClientButton: boolean = true;
showPartnerButton: boolean = false;
showGuestButton: boolean = false;

buttonTextClient: string = 'Sign Up';
  buttonTextPartner: string = 'Partner';
  buttonTextGuest: string = 'Guest';


  signupForm: FormGroup;
  isTypePassword: boolean = true;
  isLoading: boolean = false;
  isEventOrganizer: boolean = false;
  isGuest: boolean = false;
  registrationType: string = '';
  currentUser: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) {
    this.initForm();
    
   }

  ngOnInit() {
  }
  initForm() {
    this.signupForm = new FormGroup({
      username: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(8)] }),
      phoneNumber: new FormControl('', { validators: [Validators.required, Validators.pattern(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)] }),
      confirmPassword: new FormControl('', { validators: [Validators.required] }),
      province: new FormControl('', { validators: [Validators.required] }),
      registrationType: new FormControl('', { validators: [Validators.required] }),
    }, { validators: this.passwordMatchValidator });
  }
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
  
    return password === confirmPassword ? null : { mismatch: true };
  }
  onChange()
{
  this.isTypePassword = !this.isTypePassword;
}



updateRegistrationType() {
  const selectedType = this.signupForm.get('registrationType').value;

  this.showClientButton = selectedType === 'client';
  this.showPartnerButton = selectedType === 'partner';
  this.showGuestButton = selectedType === 'guest';

  this.isEventOrganizer = selectedType === 'partner';
  this.isGuest = selectedType === 'guest';
}





  async onSubmit() {
  if(!this.signupForm.valid) return;
  console.log(this.signupForm.value)
  this.register(this.signupForm);

}


register(form) {
  console.log('register method called');
  console.log(form.value);

  this.authService.register(form.value).then((data: any) => {
    console.log('Registration successful', data);
    this.router.navigateByUrl('/chats');
    form.reset();
  })
  .catch(e => {
    console.error('Registration failed', e);
    let msg: string = 'Could not sign you in, please try again';
    if (e.code === 'auth/email-already-in-use') {
      msg = e.message;
    }
    this.showAlert(msg);
  });
  
}

async showAlert(msg) {
  console.log('showAlert called');
  const alert = await this.alertController.create({
    header: 'Alert',
    message: msg,
    buttons: ['Ok'],
  });

  await alert.present();
}

}
