
import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
  { path: 'crud', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'details/:bookId', component: DetailsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update/:bookId', component: UpdateComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
