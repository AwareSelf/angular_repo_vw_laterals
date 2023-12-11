import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[CommonModule,FormsModule,BookComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  pricecap!:number;


  constructor()
  {
    this.title='Book Library App';
    
 }


}
