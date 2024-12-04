import { Component } from '@angular/core';
import { take, throwError } from 'rxjs';
import * as Sentry from "@sentry/angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:false
})
export class AppComponent {
  title = 'sentry-test';

  constructor() {
    throwError(() => new Error('App constructor error')).subscribe();
  }

  handleClick() {
    throw('Button Error')
  }

  reqClick() {
    throwError(() => console.log('async click error')).pipe(take(1)).subscribe();
  }

  handleThirdClick() {
    throw new Error('Hey, the error HERE');
  }

  brandNew() {
     Sentry.captureException({msg: 'Error submitting purchase form, please double check your information and try again.'});
  }
}
