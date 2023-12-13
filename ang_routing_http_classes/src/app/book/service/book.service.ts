
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import {Book} from '../model/book';
import {Injectable} from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class BookService
{
   
    baseurl:string = "http://localhost:5000"
    httpser!:HttpClient;
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }

    constructor(httpser:HttpClient)
    {
        console.log('book service instance got created..');
        
        this.httpser = httpser;
    }

    addBook(b:Book):Observable<Book> 
    {
          return this.httpser.post<Book>(this.baseurl + '/books', JSON.stringify(b), this.httpOptions)//.pipe(catchError(this.errorHandler))

    }

    getAllBooks():Observable<Book[]>
    {
         return this.httpser.get<Book[]>(this.baseurl+"/books/");
      
    }

    deleteBook(b:Book)
    {
        
         return this.httpser.delete<Book>(this.baseurl + '/books/' + b.id, this.httpOptions);
   
       
    }

    updateBook(book:Book)
    {
        return this.httpser.put<Book>(this.baseurl + '/books/' + book.id, JSON.stringify(book), 
    this.httpOptions)
    }

    /*
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
       */

}