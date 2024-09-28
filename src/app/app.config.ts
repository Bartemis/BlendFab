// src/app/app.config.ts

import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import {HttpClientModule} from "@angular/common/http";

export const appConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule
    ),
    provideAnimations()
  ]
};
