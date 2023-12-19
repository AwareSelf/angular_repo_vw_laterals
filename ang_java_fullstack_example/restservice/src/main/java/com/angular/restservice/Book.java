package com.angular.restservice;

public class Book {
	
	
    private int id;
	private String bookname;
	private int bookprice;
	
	public Book(int bookId, String bookName, int bookPrice) {
		super();
		this.id = bookId;
		this.bookname = bookName;
		this.bookprice = bookPrice;
	}

	
	
	
	
	public int getId() {
		return id;
	}





	public void setId(int id) {
		this.id = id;
	}





	public String getBookname() {
		return bookname;
	}





	public void setBookname(String bookname) {
		this.bookname = bookname;
	}





	public int getBookprice() {
		return bookprice;
	}





	public void setBookprice(int bookprice) {
		this.bookprice = bookprice;
	}





	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof Book)) {
			return false;
		}
		Book other = (Book) obj;
		if (id != other.id) {
			return false;
		}
		
		return true;
	}

	@Override
	public String toString() {
		return "Book [bookId=" + id+ ", bookName=" + bookname + ", bookPrice=" + bookprice + "]";
	}
	
	

}
