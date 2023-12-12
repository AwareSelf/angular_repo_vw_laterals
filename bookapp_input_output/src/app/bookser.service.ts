import { Injectable } from '@angular/core';
import {Book} from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookserService {

  bookarr?:Book[]

  constructor() {

    let book,book1:Book;
    book = new Book(1,'Angular',120);
    book1 = new Book(2,'React',300);
    
    this.bookarr = [];
    this.bookarr.push(book);
    this.bookarr.push(book1);
   }

 //called from addbook.component
   addBook(b:Book):boolean
   {
    console.log("inside bookser service, addbook method:"+b.bookid+","+b.bookname+","+b.bookprice);
    this.bookarr?.push(b);
    return true;
   }

   //called from listbook.component
   getAllBooks():Book[] | undefined
   {
     return this.bookarr?.slice(0);
   }


}
