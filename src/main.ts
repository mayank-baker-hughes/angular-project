import { bootstrapApplication } from '@angular/platform-browser';
import {provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
   provideHttpClient()
  ]
});