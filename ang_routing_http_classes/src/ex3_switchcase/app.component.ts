import { Component } from '@angular/core';
import {Book} from './model/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
//  mybook:Book;
  bookarr:Book[];


  constructor()
  {
    this.title='Book Library App';
     this.bookarr=[];

  }

  addBook(bid:string,bn:string,bp:string):void
  {
    
     //   this.mybook=new Book(+bid,bn,+bp);
     //   this.bookarr.push(this.mybook);

         this.bookarr.push(new Book(+bid,bn,+bp));
     
  }
}
