import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sentry-test';

  constructor() {
    new Error('Constructor error');
  }

  handleClick() {
    new Error('Button error');
  }
}
