import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
    public toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  onSubmit() {
    if (!this.loginForm.get('login').valid) {
      alert('login is not valid');
    } else if (!this.loginForm.get('password').valid) {
      alert('password is not valid');
    } else {
      const user: LoginInDto = {
        login: this.loginForm.get('login').value,
        password: this.loginForm.get('password').value
      };
      this.showSuccess();
      console.log(`username: ${user.login}   password:${user.password}`);
    }
  }
}
