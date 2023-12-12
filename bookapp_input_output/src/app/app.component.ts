import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListbookComponent } from './listbook/listbook.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookserService } from './bookser.service';
import { FormsModule } from '@angular/forms';
import {Book} from './model/book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,ListbookComponent,AddbookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  title = 'This is my first sample app!';
  name?:string;
  pricecap:number;
  book:Book;
 

  constructor()
  {
    console.log('app component constructor called..');
    this.name = 'Namrata Marathe';
    this.pricecap = 200;
    //this.book = new Book(-1,"",-1);
  }


  setBookDet(bk:any):void
  {
    console.log('inside app component setBook..'+bk);
    this.book = bk;
    console.log('evet recv bookid='+this.book.bookid);
  }
}
