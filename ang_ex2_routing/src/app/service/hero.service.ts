import { Injectable } from '@angular/core';
@Injectable()
export class HeroService {
   
    name:string[] = [];
    
    
    addUser(user:string)
    {
      console.log(user);
       this.name.push(user);
    
    }
    
    getAllUsers():Array<string>
    {
      return this.name.slice();
    }
    
    
    
    
}

