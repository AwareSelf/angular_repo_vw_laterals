
import { Component } from '@angular/core';
import { HeroService } from '../service/hero.service';

@Component({
  standalone:true,
  template: `
  <h1>{{title}}</h1>
  <input #inputbox1 (keyup.enter)="addUser(inputbox1.value);inputbox1.value=''">
  <button (click)="addUser(inputbox1.value);inputbox1.value=''"> AddUser</button>
 
  `,
 //providers: [ HeroService ]

})
export class RegisterComponent {
  title = 'Register Hero';  
  
   heroser : HeroService; 
   
    constructor(heroser:HeroService)
    {
       console.log('constructor called');
       this.heroser = heroser;
     }
   
    
    
    addUser(user:string)
    {
      this.heroser.addUser(user);
    
    }
    
   
    
      
  }