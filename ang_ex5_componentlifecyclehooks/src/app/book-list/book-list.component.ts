import { Component, Input, OnChanges, SimpleChanges,OnInit,OnDestroy } from '@angular/core';
import {Book} from '../book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit,OnChanges,OnDestroy {
  @Input() books : Book[] =[];
  selectedBook!:Book;
  constructor() {
    console.log('book-list-component:constructor called');
   }
  ngOnInit(): void {
   console.log('book-list-component:ngOnInit called');
  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
      console.log('book-list-component:ngOnChanges called'+changes);
  }
  ngOnDestroy(): void {
    console.log('book-list-component:ngOnDestroy called');
   }
  public selectBook(book:Book){
    this.selectedBook = book;
  }
}
