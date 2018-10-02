import { Component, OnInit } from '@angular/core';
import {BookRequestServices} from "../services/booksRequest.services";

import { Book } from 'src/models/bookModel';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers:[BookRequestServices]
})
export class BookComponent {
  public title:string ="Novels";
  public book:Book;
  public books :Book[];
  public booksBy :Book[] = new Array();
 

    constructor( private _bookRequest:BookRequestServices, private _cartService: CartService) {
       this.getAllBooks();
      }

  ngOnInit(){
   
  }

  getAllBooks(){
    this._bookRequest.getBooks().then((books:Book[]) =>{
      this.books = books;
    // this.booksByCategory("Cómic");
    }).catch(err => console.log(err));
  }

  booksByCategory(category:string){
    this.booksBy = [];
    for(var i = 0; i<this.books.length; i++){
      if(this.books[i].genere == category ){
         this.booksBy.push(this.books[i]); 
      }
    }
    return this.booksBy;
  }

  addBookToList(book){
    this._cartService.addBook(book);
  }
}

