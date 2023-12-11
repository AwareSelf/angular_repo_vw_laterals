import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BookService } from './app/book/service/book.service';


/*
  bootstrapApplication(AppComponent,{providers:[BookService]})
  .catch((err) => console.error(err));
  */
  bootstrapApplication(AppComponent,{providers:[BookService]})
  .catch((err) => console.error(err));