import { Component } from '@angular/core';
import { Book } from '../model/book';
import { BookserService } from '../bookser.service';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent {

  bookarr?:Book[];
  bookser?:BookserService;

  constructor(bookser:BookserService)
  {
    console.log('ListBookComponent constructor called..');
    this.bookser = bookser;
    this.bookarr = this.bookser.getAllBooks();
   
  }

  getAllBooks()
  {
    this.bookarr = this.bookser?.getAllBooks();

    if(this.bookarr)
    {
      console.log("after calling getAllBooks on service"+this.bookarr[0].bookid);
    }
    else
    {
      console.log('Book array is undefined..');
    }
  }

}
