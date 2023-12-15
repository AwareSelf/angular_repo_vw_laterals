import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { states } from './data-model';

@Component({
  selector: 'app-emp-reactive',
  templateUrl: './emp-reactive.component.html',
  styleUrls: ['./emp-reactive.component.css']
})
export class EmpReactiveComponent implements OnInit {


  empForm!: FormGroup; // <--- heroForm is of type FormGroup
  states = states;
  
  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
   // this.heroForm = this.fb.group({
   //  name: '', // <--- the FormControl called "name"
   // });
   
   this.empForm = this.fb.group({
        name: ['', Validators.required ],
       address: this.fb.group({ // <-- the child FormGroup
        street: '',
        city: '',
        state: '',
        zip: ''
        }),
       power: '',
       sidekick: ''
    });
  }

}
