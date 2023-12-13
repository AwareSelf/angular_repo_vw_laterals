import { Component,Input } from '@angular/core';
import {Book} from './model/book';
import {BookService} from './service/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'show-book',
  standalone:true,
  imports : [FormsModule,CommonModule],
  providers:[BookService],
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.css']
})
export class ShowBookComponent {
  bkarr:Book[];
  bookserv:BookService;
  editflag:boolean;
  temp!:Book;

  constructor(bookserv:BookService)
  {
    this.bookserv=bookserv;
    this.bkarr=this.bookserv.getAllBooks();
    if(this.bkarr.length===0)
    console.log('book array is empty');
    this.editflag=false;
  }

  /* 
  for loop : diff types
  for/of let array = [1, 2, 3]; for (let a of array) { console. log(a); }
  forEach() let array = [1, 2, 3]; array. forEach(function(a, index) { console. log(a); });
  Plain for loop let array = [1, 2, 3]; for (let i = 0; i < array. length; i++) { console. log(array[i]); }
  */
  listbooks():void
  {
    console.log('inside list books');
    this.bkarr=this.bookserv.getAllBooks();
    if(this.bkarr.length===0)
      console.log('book array is empty');
    for(let b of this.bkarr)
    {
      console.log(b.bookid+','+b.bookname+','+b.bookprice);
    }
  }

  delBook(b:Book)
  {
    this.bookserv.deleteBook(b);
    this.bkarr=this.bookserv.getAllBooks();
  }

  editBook(b:Book)
  {
    console.log('inside editBook');
    this.editflag=true;
    this.temp=new Book(b.bookid,b.bookname,b.bookprice);
   }

   updateBook(b:Book)
   {
     this.bookserv.updateBook(b);
     this.bkarr = this.bookserv.getAllBooks();
     this.editflag=false;
   }
   
   cancelBook(b:Book)
   {
    this.editflag=false;
     return;
   }

 }
