
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import {Book} from '../model/book';
import {Injectable} from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class BookService
{
    bookarr:Book[];
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
        this.bookarr=[];
        this.httpser = httpser;
    }

    addBook(b:Book):Observable<Book> 
    {
        this.bookarr.push(b);
      //  return this.httpser.post<Book>(this.baseurl+"/book/",JSON.stringify(b),this.httpOptions);

      return this.httpser.post<Book>(this.baseurl + '/books', 
      JSON.stringify(b), 
this.httpOptions)//.pipe(catchError(this.errorHandler))

    }

    getAllBooks():Observable<Book[]>
    {
         return this.httpser.get<Book[]>(this.baseurl+"/books/");
      
    }

/*
avoid using indexOf to locate book object in array as indexof will find object
only if its original object and not its copy
whereas if you search using bookid it will find book even if its original
or copy
*/
    deleteBook(b:Book)
    {
         var index=-1;
        for(var i=0;i< this.bookarr.length;i++)
        {
            if(this.bookarr[i].bookid == b.bookid)
             index=i;

        }
        if(index!=-1)
        this.bookarr.splice(index,1);
    }

    updateBook(b:Book)
    {
        var index=-1;
        for(var i=0;i< this.bookarr.length;i++)
        {
            if(this.bookarr[i].bookid == b.bookid)
             index=i;

        }
        console.log('index val:'+index);
        if(index!=-1)
        {
          this.bookarr[index].bookname=b.bookname;
          this.bookarr[index].bookprice=b.bookprice;
        }
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