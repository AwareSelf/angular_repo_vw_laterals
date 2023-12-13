//https://www.techiediaries.com/angular/angular-9-8-crud-example-and-tutorial/

import { Injectable } from '@angular/core';
import { Book } from './model/book';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookdaoService {

   bookrArr:Book[] = [];
    flag:boolean=false;

    private apiServer = "http://localhost:5000";
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    
   constructor(private httpClient: HttpClient){ }

   create(book:Book): Observable<Book> {
    return this.httpClient.post<Book>(this.apiServer + '/books', JSON.stringify(book), 
    this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  getById(id:number): Observable<Book> {
    return this.httpClient.get<Book>(this.apiServer + '/books/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.apiServer + '/books/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  update(id:number, book:Book): Observable<Book> {
    return this.httpClient.put<Book>(this.apiServer + '/books/' + id, JSON.stringify(book), 
    this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete<Book>(this.apiServer + '/books/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => error);
 }
   
     
  
    
    
}


