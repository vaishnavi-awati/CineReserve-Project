import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // <-- 1. Change 'App' to 'AppComponent' here

bootstrapApplication(AppComponent, appConfig) // <-- 2. Update it here too
  .catch((err) => console.error(err));