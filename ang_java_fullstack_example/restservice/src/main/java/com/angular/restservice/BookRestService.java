package com.angular.restservice;


import java.util.*;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins= "http://localhost:4200/")
public class BookRestService {
	
	List<Book> arr;

	
	public BookRestService()
	{
		this.arr = new ArrayList<Book>();
		this.arr.add(new Book(1,"JQuery",200));
		this.arr.add(new Book(2,"React",300));
	}
	
	
	
	@PostMapping("/add/book")
	public ResponseEntity<Book> addBook(@RequestBody Book b)
	{
		System.out.println("add book:"+b.getId()+","+b.getBookname()+","+b.getBookprice());
		
		this.arr.add(b);
		return ResponseEntity.ok(b);
		
	}
	

	@PutMapping("/update/book")
	public ResponseEntity<Book> updateBook(@RequestBody Book b)
	{
		System.out.println("update book:"+b.getId()+","+b.getBookname()+","+b.getBookprice());
		
		if(this.arr.contains(b))
		{
			this.arr.remove(b);
			System.out.println(this.arr);
			this.arr.add(b);
			System.out.println(this.arr);
			System.out.println("Book with bookid:"+b.getId()+" updated successfully.");
		}
		else
		{
		  this.arr.add(b);
		  System.out.println("Book with bookid:"+b.getId()+" updated i.e. newly created successfully.");
		}
		return ResponseEntity.ok(b);
		
	}
	
	@GetMapping("/books")
	public List<Book> getAllBook()
	{
		
		return this.arr;
		
	}
	
	@DeleteMapping("/delete/book/{bookid}")
	public HttpStatusCode deleteBook(@PathVariable int bookid)
	{
		System.out.println("delete book with id:"+bookid);
		
	    final Book bk;
	    
	    arr.removeIf(b->b.getId()==bookid);
	    
	    return HttpStatusCode.valueOf(200);
			
			
	}
	
	
	
	

}
