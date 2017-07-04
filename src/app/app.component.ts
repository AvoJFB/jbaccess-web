import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  options = {
    position: ['top', 'right'],
    timeOut: 3000,
    lastOnBottom: false,
    pauseOnHover: true,
    maxStack: 6,
    animate: 'scale'
  };
}
