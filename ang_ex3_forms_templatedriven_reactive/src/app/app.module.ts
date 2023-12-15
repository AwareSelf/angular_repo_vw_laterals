import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpTemplateComponent } from './emp-template/emp-template.component';
import { EmpReactiveComponent } from './emp-reactive/emp-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpReactiveComponent,
    EmpTemplateComponent

   
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
