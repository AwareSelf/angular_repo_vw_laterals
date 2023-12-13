import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  /*
  Note:above is same as
  const appRoutes: Routes = […];
    bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(RouterModule.forRoot(appRoutes)),
    ]
   });

   because 
   appConfig =  {
    providers: [
        importProvidersFrom(RouterModule.forRoot(appRoutes)),
    ]
   }
  */
 /*
 Here’s an example of opting in to preloading (feature) using the withPreloading function :

const appRoutes: Routes = [];
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withPreloading(PreloadAllModules))
  ]
});
*/