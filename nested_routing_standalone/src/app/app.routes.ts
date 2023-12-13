import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { BookComponent } from './book/book.component';

export const routes: Routes = [

    {
      path:'customer',
      component:CustomerComponent
    },
    {
      path:'book',
      component:BookComponent
    },
    {
      path:'about',
      loadChildren: () => import('./about/about.routes').then(routes => routes.routes)
    }
];
