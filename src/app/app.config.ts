import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withPreloading,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { NameService } from './features/demos/services/name';
import { PrefsStore } from './services/prefs.store';
import { CustomPreloadingStrategy } from '@app-shared/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(
      routes,
      withViewTransitions(),
      withPreloading(CustomPreloadingStrategy),
    ),
    NameService, // this is the "global instance" and the only one, unless anyone else provides it.
    PrefsStore, // This does NOT create this, you can use a factory, but that's hard.
  ],
};
