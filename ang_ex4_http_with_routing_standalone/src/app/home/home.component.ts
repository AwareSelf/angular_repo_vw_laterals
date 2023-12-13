import { Component, OnInit } from '@angular/core';
import { BookdaoService } from '../bookdao.service';
import { Book } from '../model/book';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];

  constructor(public bookdao: BookdaoService) { }

  ngOnInit() {

    this.bookdao.getAll().subscribe((data: Book[])=>{
      console.log(data);
      this.books= data;
    })  
  }

  getallbooks()
  {
    this.bookdao.getAll().subscribe((data: Book[])=>{
      console.log(data);
      this.books= data;
    })  
  }

  delete(bookid:number)
  {
    this.bookdao.delete(bookid).subscribe(()=>{
      console.log('book with bookid:'+bookid+' is deleted');
    });

     this.getallbooks();
   
  }

}
