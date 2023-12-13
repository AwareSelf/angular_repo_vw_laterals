import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent implements OnInit,OnDestroy{

  
  constructor()
  {
    console.log('AddBook component constructor called...');
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log('AddBook OnInit called...');
  }
  ngOnDestroy(): void {
   // do all cleanup activities like close all open resources..
   console.log('AddBook about to be destroyed/unloaded...');
  }

}
