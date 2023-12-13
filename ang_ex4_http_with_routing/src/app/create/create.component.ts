import { Component, OnInit } from '@angular/core';
import { BookdaoService } from '../bookdao.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  bookForm!: FormGroup;

  ngOnInit() {

      this.bookForm = new FormGroup({
      bookid: new FormControl(''),
      bookname: new FormControl(''),
      bookauthor: new FormControl(''),
     
    })

    console.log(this.bookForm);
    console.log(this.bookForm.value)
    console.log(this.bookForm.controls);
   
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: BookdaoService
  ){ }
  submitForm() {
    console.log('submit form called'+this.bookForm.value);
    this.crudService.create(this.bookForm.value).subscribe(res => {
      console.log('Book created!')
      this.router.navigateByUrl('/home')

  });

 }
}