import { Component,Input} from '@angular/core';
import { Book } from '../model/book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookserService } from '../bookser.service';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css',
  
})
export class AddbookComponent {

  @Input() name?:string;
  book?:Book;
  bookser?:BookserService;

  constructor(bookser:BookserService) //dependancy injection
  {
    console.log('AddbookComponent constructor called..');
    this.book = new Book(3,'CoreJava',1200);
    this.bookser = bookser;
  }

  addBook():void
  {
    if(this.book)
    {
    console.log(this.book.bookid);
    console.log(this.book?.bookname)
    console.log(this.book?.bookprice);
    this.bookser?.addBook(this.book);
    this.book = new Book(++this.book.bookid,"",-1);
    

    }
    else
    {
         console.log('book object does not exist');
    }
    
  }


}
