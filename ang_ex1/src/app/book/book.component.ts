import { Component,Input,Output,EventEmitter } from '@angular/core';
import {Book} from './model/book';
import {BookService} from './service/book.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'my-book',
  standalone:true,
  imports:[CommonModule,FormsModule, ReactiveFormsModule],
 // providers:[BookService],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],

})
export class BookComponent {
 
   mybook:Book;
   oldbook!:Book;
   bookserv:BookService;
   flag:boolean = false;
   bookForm!: FormGroup;
   fb!:FormBuilder;

  constructor(bs:BookService,fb:FormBuilder)
  {
     this.bookserv=bs;
     this.fb = fb;
     this.mybook=new Book(1,"Angular",200);

     this.createForm();
  }

  createForm()
 {
    this.bookForm = this.fb.group({
    bkid: [1,Validators.required],
    bkname: ['Angular',[Validators.pattern('^[A-Za-z0-9]{5,15}$')]],
    bkprice: [100,[Validators.required,Validators.min(1)]]
   });
   
      return this.bookForm;
  }


  addbook():void
  {

    console.log('inside form mysubmit method');
    console.log(this.bookForm.status);
    console.log(this.bookForm.get('bkid')?.status)



    if(this.bookForm.status=="VALID")
    {
    let bookid = this.bookForm.get('bkid')?.value;
     console.log(bookid);
    let bookname =  this.bookForm.get('bkname')?.value;
    console.log(bookname);

    let bookprice = this.bookForm.get('bkprice')?.value;
    console.log(bookprice);

      if(bookid && bookname && bookprice)
      {
       console.log(bookid+","+bookname+","+bookprice);
       let b = new Book(+bookid,bookname,+bookprice);
       this.bookserv.addBook(b);
       this.oldbook = b;
      //  this.mybook=new Book();
         console.log('book added to service');
        this.flag = true;

        console.log('before resetting..');
       
        console.log(this.bookForm.value);
        
        //set form back to initial value and pass it to reset() method
         this.bookForm = this.createForm();
         console.log(this.bookForm.value);
        this.bookForm.reset(this.bookForm.value);
      }
      else
       console.log('bookid or bookname or bookprice is undefined..');
    }
    else
    {
      console.log('bookform is invalid, dont extract values');
    }
    
  }

   

}
