//https://angular.io/guide/router
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

/*
provideRouter function:
Sets up providers necessary to enable Router functionality for the application. 
Allows to configure a set of routes as well as extra features that should be enabled.
*/