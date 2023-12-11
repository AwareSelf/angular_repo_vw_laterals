import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register.component';
import { ListComponent } from './components/list.component';
import { PageNotFoundComponent } from './components/not-found.component';


//also called as route config
export const routes: Routes = [ {
    path: 'registeruser',
    component: RegisterComponent ,
   
  },
  {
    path: 'listusers',
     component: ListComponent,
    
  },
  { path: '',   redirectTo: '/registeruser', pathMatch: 'full' }, //default route
  { path: '**', component: PageNotFoundComponent }];

