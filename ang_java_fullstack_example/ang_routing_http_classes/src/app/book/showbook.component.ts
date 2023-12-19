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
     
      console.log(books);
   
      this.bkarr = books;
      console.log(this.bkarr);

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

        
        console.log(books);
   
      this.bkarr = books;
      console.log(this.bkarr);


  
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

      console.log(books);
   
      this.bkarr = books;
      console.log(this.bkarr);


    })
    if(this.bkarr.length===0)
      console.log('book array is empty');
    for(let b of this.bkarr)
    {
      console.log(b.id+','+b.bookname+','+b.bookprice);
    }
  }

  delBook(b:Book)
  {
   
    this.bookserv.deleteBook(b).subscribe(()=>{

      console.log('inside showbook component, deletebook method:book with id:'+b.id+'deleted successfully');
      this.bookserv.getAllBooks().subscribe((books:Book[])=>{

        console.log('after deleting book, fetch all books..');
        console.log(books);
     
        this.bkarr = books;
        console.log(this.bkarr);
  
  
      })

    })
 
 
  }

  editBook(b:Book)
  {
    console.log('inside editBook');
    this.editflag=true;
    this.temp=new Book(b.bookname,b.bookprice,b.id);
   }

   updateBook(b:Book)
   {
     this.bookserv.updateBook(b).subscribe((b1:Book)=>{
      
       console.log(b1);
      console.log('inside showbook component, book with bookid:'+b1.id+'updated successfully');
     })
     this.bookserv.getAllBooks().subscribe((books:Book[])=>{

      console.log('after updating book, fetch all books..');
      console.log(books);
   
      this.bkarr = books;
      console.log(this.bkarr);


    })
     this.editflag=false;
   }
   
   cancelBook(b:Book)
   {
    this.editflag=false;
     return;
   }
   

 }
