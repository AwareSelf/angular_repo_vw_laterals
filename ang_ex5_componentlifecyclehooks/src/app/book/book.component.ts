import { Component, Input, OnInit, Output, EventEmitter,OnChanges,SimpleChanges,OnDestroy} from '@angular/core';
import { Book } from '../book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit,OnChanges,OnDestroy {
   book:Book=new Book();
   @Output() out_book_evnt:EventEmitter<Book> = new EventEmitter<Book>();

 constructor() {
     console.log('book-component:constructor called');
   }
  ngOnInit(): void {
    console.log('book-component:ngOnInit called');
   }

  ngOnChanges(changes: SimpleChanges): void {
    // changes.prop contains the old and the new value...
      console.log('book-component:ngOnChanges called'+changes);
  }
  ngOnDestroy(): void {
    // changes.prop contains the old and the new value...
      console.log('book-component:ngOnDestroy called');
  }
  createBook()
  {
    this.out_book_evnt.emit(this.book);
    this.book = new Book();
  }

}
