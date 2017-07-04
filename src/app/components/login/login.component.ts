import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications/dist';

import { LoginInDto } from '../../models/LoginInDto';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private notificationsService: NotificationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (!this.loginForm.get('login').valid) {
      this.notificationsService.error(
        'Error',
        'Login is not valid'
      );
    } else if (!this.loginForm.get('password').valid) {
      this.notificationsService.error(
        'Error',
        'Password is not valid'
      );
    } else {
      const user: LoginInDto = {
        login: this.loginForm.get('login').value,
        password: this.loginForm.get('password').value
      };
      this.notificationsService.success(
        'Success!',
        'You have logged in.',
      );
      this.authService.login(user)
        .subscribe(res => this.router.navigate(['']));
    }
  }
}
