import { Component,Input, OnInit } from '@angular/core';
import {Book} from './model/book';
import {BookService} from './service/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'show-book',
  standalone:true,
  imports : [FormsModule,CommonModule],
 // providers:[BookService],
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.css']
})
export class ShowBookComponent implements OnInit{
  bkarr:Book[];
  bookserv:BookService;
  editflag:boolean;
  temp!:Book;

  constructor(bookserv:BookService)
  {
    console.log('inside ShowBook Component');
    this.bookserv=bookserv;
    this.bkarr=[];
    this.bookserv.getAllBooks().subscribe((books:Book[])=>{
     
      for(var i =0;i<books.length;i++)
      {
        console.log(books[i].bookid+","+books[i].bookname+","+books[i].bookprice);
      }
      this.bkarr = books;
      for(var i =0;i<this.bkarr.length;i++)
      {
        console.log(this.bkarr[i].bookid+","+this.bkarr[i].bookname+","+this.bkarr[i].bookprice);
      }

    })
    if(this.bkarr.length===0)
     console.log('book array is empty');
    else
     console.log('bookarr has no of books='+this.bkarr.length);
    this.editflag=false;
  }

  ngOnInit(): void {
      console.log('showbook  component initialized..');
      this.bookserv.getAllBooks().subscribe((books:Book[])=>{

        
      for(var i =0;i<books.length;i++)
      {
        console.log(books[i].bookid+","+books[i].bookname+","+books[i].bookprice);
      }
      this.bkarr = books;
      for(var i =0;i<this.bkarr.length;i++)
      {
        console.log(this.bkarr[i].bookid+","+this.bkarr[i].bookname+","+this.bkarr[i].bookprice);
      }

  
      })
      if(this.bkarr.length===0)
       console.log('book array is empty');
      else
       console.log('bookarr has no of books='+this.bkarr.length);
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
    this.bookserv.getAllBooks().subscribe((books:Book[])=>{

      
      for(var i =0;i<books.length;i++)
      {
        console.log(books[i].bookid+","+books[i].bookname+","+books[i].bookprice);
      }
      this.bkarr = books;
      for(var i =0;i<this.bkarr.length;i++)
      {
        console.log(this.bkarr[i].bookid+","+this.bkarr[i].bookname+","+this.bkarr[i].bookprice);
      }


    })
    if(this.bkarr.length===0)
      console.log('book array is empty');
    for(let b of this.bkarr)
    {
      console.log(b.bookid+','+b.bookname+','+b.bookprice);
    }
  }
/*
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
   */

 }
