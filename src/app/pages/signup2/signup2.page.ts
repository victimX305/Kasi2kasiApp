import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
})
export class Signup2Page implements OnInit {

 
  @Input() youtubeUrl: string;
  safeYoutubeUrl: SafeResourceUrl;

  constructor(private modalController: ModalController,
    private sanitizer: DomSanitizer

  ) {}

  dismiss() {
    this.modalController.dismiss();
  }

  ngOnInit() {
    this.safeYoutubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl);
  }

}
