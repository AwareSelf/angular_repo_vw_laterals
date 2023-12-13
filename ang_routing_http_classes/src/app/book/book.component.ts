import { Component,Input,Output,EventEmitter } from '@angular/core';
import {Book} from './model/book';
import {BookService} from './service/book.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'my-book',
  standalone:true,
  imports:[FormsModule],
 // providers:[BookService],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],

})
export class BookComponent {
 
   mybook:Book;
   oldbook!:Book;
   bookserv:BookService;
   flag:boolean = false;
   status!:string;
   router!:Router;

  constructor(bs:BookService,router:Router)
  {
     this.bookserv=bs;
     this.mybook=new Book("Angular",200,3);
     this.router =  router;
  }

  addbook(b:Book):void
  {
     this.bookserv.addBook(b).subscribe((b:Book)=>{
    
      console.log("book post successful");
      console.log(b);
      this.mybook=b;
      this.status="book with bookid:"+this.mybook.id+
                  ",bookname="+this.mybook.bookname+",bookprice="+this.mybook.bookprice
                  +" posted successfully.";

     // this.router.navigate([''])
     });
     
     this.oldbook = b;
     this.mybook=new Book();
    console.log('book added to service');
    this.flag = true;
  }

}
