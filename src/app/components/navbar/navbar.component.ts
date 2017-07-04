import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications/dist';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout()
      .subscribe(res => {
        this.notificationsService.success(
          'Success!',
          'You have logged out.'
        );
        this.router.navigate(['login']);
      });
  }
}
