import { Component,Input,EventEmitter,Output} from '@angular/core';
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

 
  book?:Book;
  @Output() bookevt:EventEmitter<Book> = new EventEmitter<Book>();


  constructor() //dependancy injection
  {
    console.log('AddbookComponent constructor called..');
    this.book = new Book(3,'CoreJava',1200);
 
  }

  addBook():void
  {
    if(this.book)
    {
    console.log(this.book.bookid);
    console.log(this.book?.bookname)
    console.log(this.book?.bookprice);
    this.bookevt.emit(this.book);
    console.log('book event emitted:bookid'+this.book.bookid);
    this.book = new Book(-1,"",-1);
    

    }
    else
    {
         console.log('book object does not exist');
    }
    
  }


}
