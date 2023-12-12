import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component,ComponentRef,ElementRef,
  OnInit, ViewChild,OnChanges,SimpleChanges,OnDestroy,AfterContentChecked,
AfterContentInit} from '@angular/core';
import {Book} from './book';
import { FormsModule, NgModel } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { GreetDirective} from './greet.directive';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[FormsModule, BookListComponent,
    BookComponent,
    GreetDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements
OnInit,
OnChanges,
AfterViewInit,
AfterViewChecked,
AfterContentInit,
AfterContentChecked,
OnDestroy{

 @ViewChild('appname') appname!:ElementRef;
 @ViewChild(BookListComponent) bookListComponent!:BookListComponent;
  booklist!: Book[];
  greetMe!: string;

  @ViewChild(GreetDirective)
  set greetApp(dir: GreetDirective) {
    this.greetMe = dir.WhatsUp
    this.cdr.detectChanges();
  };

  constructor(private cdr: ChangeDetectorRef) {
    console.log('app-component:constructor called');
  }

  ngOnInit() {
    console.log('app-component:ngOnInit called');
    this.booklist =
    [
      {id: 1, name: "Learning Angular", description: "Learning Angular des", price: 100},
      {id: 2, name: "Learning Bootstrap", description: "Learning Bootstrap des", price: 200},
      {id: 3, name: "Learning React", description: "Learning React des", price: 300},
      {id: 4, name: "Learning RXJS", description: "Leanring RxJS des", price: 400}
    ];

    console.log(this.bookListComponent);
    console.log(this.appname);


  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
      console.log('app-component:ngOnChanges called'+changes);
  }

  ngAfterViewInit()
  {
    console.log('app-component:ngAfterViewInit called');
    console.log(this.bookListComponent.books);
    console.log(this.appname);
    console.log(this.appname.nativeElement.value);
  }

  ngAfterViewChecked()
  {
    console.log('app-component:ngAfterViewChecked called')
  }

  ngAfterContentInit()
  {
    console.log('app-component:ngAfterContentInit called');

  }

  ngAfterContentChecked()
  {
    console.log('app-component:ngAfterContentChecked called')
  }

  ngOnDestroy():void
  {
    console.log('app-component:ngOnDestroy called')
  }




  public createBook(b:Book){
    console.log('inside create book'+b);
    this.booklist.push(b);
    console.log(this.booklist);
    console.log(this.appname);
    console.log(this.appname.nativeElement.value);
     }


}

