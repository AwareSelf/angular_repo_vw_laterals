
export class Book
{
    bookid:number;
    bookname:string;
    bookauthor:string;


    constructor(bookid:number,bookname:string,bookauthor:string)
    {
        this.bookid = bookid;
        this.bookname = bookname;
        this.bookauthor = bookauthor;

    }

    getBook():string
    {
        return 'bookid:'+this.bookid +","
               +'bookname:'+this.bookname+","
               +'bookauthor:'+this.bookauthor;
    }


}