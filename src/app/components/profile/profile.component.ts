import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {UserOutDto} from '../../shared/models/UserOutDto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserOutDto;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    console.log(this.user)
  }

}
