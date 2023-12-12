import { Component,Input,OnChanges,SimpleChanges} from '@angular/core';
import { Book } from '../model/book';
import { BookserService } from '../bookser.service';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent implements OnChanges{

  @Input('bookpriceccap') mypricecap!:number;
  @Input() bk!:Book;

  bookarr?:Book[];


  constructor()
  {
    console.log('ListBookComponent constructor called..');
    this.bookarr = [];
    
   
  }

  
  ngOnChanges() {
    console.log('OnChanges called');
    this.bookarr.push(this.bk);
 }

  listbooks():void
  {
    if(this.bk)
    {
      this.bookarr.push(this.bk);
     console.log('book pushed into the array..');
    }
    else
    {
      console.log('book not passed in from parent..');
    }
  }

 
}
