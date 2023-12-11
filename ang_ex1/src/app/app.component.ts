import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { ShowBookComponent } from './book/showbook.component';
import { BookService } from './book/service/book.service';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[CommonModule,FormsModule, ShowBookComponent,
    BookComponent],
  // providers:[BookService], //provide this service when you bootstrappapplication
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title:string;



  constructor()
  {
    this.title='Book Library App';
  }

 

}
