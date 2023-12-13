import { Component,OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent implements OnInit,OnDestroy {


  constructor()
  {
    console.log('ListBook component constructor called...');
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log('ListBook OnInit called...');
  }
  ngOnDestroy(): void {
   // do all cleanup activities like close all open resources..
   console.log('ListBook about to be destroyed/unloaded...');
  }

}
