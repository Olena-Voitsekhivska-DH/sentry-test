import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import * as Sentry from "@sentry/angular";

Sentry.init({
  dsn: "https://0cf153d9e22052d2044c63a822868360@o4508375353982976.ingest.de.sentry.io/4508375358177360",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost","https://sentry-test-h22wuc6l1-olenkavoitsekhivskas-projects.vercel.app/"],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
