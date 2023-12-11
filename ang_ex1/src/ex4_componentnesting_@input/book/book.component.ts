import { Component,Input } from '@angular/core';
import {Book} from './model/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-book',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
 
  mybook:Book;
  bookarr:Book[]
  @Input() mypricecap!:number;
 

  constructor()
  {
     
    this.mybook=new Book(1,'JavaBook',200);
    this.bookarr=[];

  }

  addbook(b:Book):void
  {
    this.bookarr.push(new Book(b.bookid,b.bookname,b.bookprice));
    this.mybook=new Book();
  }

 
  


}
