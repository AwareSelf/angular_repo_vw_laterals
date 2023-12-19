
import {Book} from '../model/book';
import {Injectable} from '@angular/core';
/*
@Injectable({
    providedIn: 'root',
  })*/

@Injectable()
export class BookService
{
    bookarr:Book[];

    constructor()
    {
        this.bookarr=[];
    }

    addBook(b:Book)
    {
        this.bookarr.push(b);
    }

    getAllBooks()
    {
        return this.bookarr.slice();
       //  return this.bookarr;
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

}