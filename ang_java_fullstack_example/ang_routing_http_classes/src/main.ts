import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BookService } from './app/book/service/book.service';
import {provideHttpClient} from '@angular/common/http';


/*
  bootstrapApplication(AppComponent,{providers:[BookService]})
  .catch((err) => console.error(err));
  */
  bootstrapApplication(AppComponent,{providers:[BookService,provideHttpClient()]})
  .catch((err) => console.error(err));