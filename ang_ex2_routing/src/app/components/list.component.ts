import { Component } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  imports:[CommonModule],
  template: `
  <h1>{{title}}</h1>

  <ul> 
    <li *ngFor = "let n of names">
    {{n}}
  </li>
  </ul>
<button (click)="getAll()">ShowList</button>
  `,
 //providers: [ HeroService ]

})
export class ListComponent {
  title = 'List All Heroes';  
  names:string[] = [];
  
   heroser : HeroService; 
   
    constructor(heroser:HeroService)
    {
       console.log('constructor called');
       this.heroser = heroser;
       
    }
   
         
    getAll()
    {
      this.names= this.heroser.getAllUsers();
    }
    
      
  }
