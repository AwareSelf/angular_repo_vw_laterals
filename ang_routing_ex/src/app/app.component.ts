import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang_routing_ex';
  id:number = 1;

  router:Router;

  constructor(router:Router)
  {
     this.router=router;
  }

  navSearch(idval:number)
  {
    //instead of clicking on routerLink, navigate programmatically on particular event
    //nav to particular route
    console.log('you want to search book with bookid:'+idval);
      this.router.navigate(['searchbook',idval]); //  /seachbook/4
  }
 
 
}
