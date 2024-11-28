import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sentry-test';

  constructor() {
    throw('Button Error')
  }

  handleClick() {
    throw('Button Error')
  }
}
