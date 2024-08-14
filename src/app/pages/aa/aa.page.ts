import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aa',
  templateUrl: './aa.page.html',
  styleUrls: ['./aa.page.scss'],
})
export class AaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  navigateToAdminVerification() {
    this.router.navigate(['/v'])
  }

  navigateToEventManage() {
    this.router.navigate(['/av'])
  }
  ngOnInit() {
  }

}
