import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListbookComponent } from './listbook/listbook.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookserService } from './bookser.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ListbookComponent,AddbookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[BookserService]
})
export class AppComponent {
  title = 'This is my first sample app!';
  name?:string;
  childcomponentname?:string;
 

  constructor()
  {
    console.log('app component constructor called..');
    this.name = 'Namrata Marathe';
    this.childcomponentname = 'Book Component1';
  }
}
