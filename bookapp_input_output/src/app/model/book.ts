
export class Book {

    constructor(private _bookid: number,private _bookname: string,private _bookprice: number)
    {
   
    }

    public get bookprice(): number {
        return this._bookprice;
    }
    public set bookprice(value: number) {
        this._bookprice = value;
    }
    public get bookname(): string {
        return this._bookname;
    }
    public set bookname(value: string) {
        this._bookname = value;
    }
    public get bookid(): number {
        return this._bookid;
    }
    public set bookid(value: number) {
        this._bookid = value;
    }


}