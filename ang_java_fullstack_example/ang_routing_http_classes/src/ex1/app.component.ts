import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Book} from './model/book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string;
  myname:string;
  mybook!:Book;

  constructor()
  {
    this.title='Book Library App';
    this.myname='Namrata';
   // this.mybook=new Book(1,'JavaBook',200);

  }

  displayBook(bid:string,bn:string,bp:string):void
  {
    if(this.mybook!=null)
     {   
      this.mybook.bookid=+bid;
      this.mybook.bookname=bn;
      this.mybook.bookprice=+bp;
     }
     else
     {
        this.mybook=new Book(+bid,bn,+bp);
     }
  }
}
