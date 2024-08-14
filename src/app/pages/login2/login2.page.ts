import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {

  form: FormGroup | any;
  isTypePassword: boolean = true;
  isLording = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) {
    this.initForm();
   }

  ngOnInit() {
  }


  initForm(){
    this.form = new FormGroup({
      email: new FormControl('',
     {validators: [Validators.required, Validators.email]}
      ),
      password: new FormControl('',
      {validators: [Validators.required, Validators.minLength(8)]}
      ),
    });
  }
  onChange()
  {
    this.isTypePassword = !this.isTypePassword;
  }

  onSubmit()
  {
    if(!this.form.valid) return;
    console.log(this.form.value);
    this.isLogin(this.form);
  }

  isLogin(form)
  {
    this.authService.login(form.value.email, form.value.password).then(data => {
      console.log(data);
      this.router.navigateByUrl('/chats')
      form.reset();
    })
    .catch(e => {
      console.log(e);
      let msg: string = 'Could not sign you in, please try again.';
      if(e.code == "auth/user-not-found") msg = 'Email address could not be found';
      else if(e.code == 'auth/wrong-password') msg = 'Please enter a correct password';
    });
  }
  async showAlert(msg)
  {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK'],
    });
  }

}
