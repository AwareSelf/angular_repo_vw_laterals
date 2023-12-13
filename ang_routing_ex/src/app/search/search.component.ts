import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  errmsg?:string;
  bkid?:number;
  constructor(private route:ActivatedRoute)
  {
     
      console.log('searchbook component constructor called...');
      //asynchronous call //Observable
       this.route.params.subscribe( params => {
           if(params['id'])
           {
               this.dosearch(params['id']);

           }
           else
           {
               this.errmsg=='please provide id!!';
           }

       });
 }


 dosearch(id:number)
 {
  console.log('id value is:'+id);
  this.bkid = id;
  //search for book with bookid bkid in angualr boo.service -> searchbook method
 }

}
