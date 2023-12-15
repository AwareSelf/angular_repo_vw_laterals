import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';
;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang_ex8_pipes';
  x=100;
  y: Promise<string> | null = Promise.resolve("hello world");
  z: Observable<string> | null = of("hello world");
  //bookarr:Observable<Book[]> | null = this.httpser.get();
  x1 = new Date(2023, 1, 3, 1, 1, 1);
  x2 = 100.88;
  ob : { [k: string]: number } = {
    foo: 1,
    bar: 2,
    baz: 3
  };
  msg: string = "The Quick Brown FOX jumps over the lazy dog ";
  marks = 0.88888;
}

//https://www.telerik.com/blogs/angular-basics-built-pipes-examples-each