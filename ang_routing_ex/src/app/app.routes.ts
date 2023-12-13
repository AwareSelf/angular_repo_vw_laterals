import { Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { ListbookComponent } from './listbook/listbook.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchComponent } from './search/search.component';

//step1 of routing: configure your appn routes
export const routes: Routes = [
 {
    path:'addbook',
    component:AddbookComponent
 },
 { 
    path:'listbooks',
    component:ListbookComponent

 },
 {
   path:'searchbook/:id',
   component:SearchComponent
 },
 {
    path:'',
    redirectTo:'/addbook',
    pathMatch:'full'
 },
 {
    path:'**',
    component:NotfoundComponent
 }

];
