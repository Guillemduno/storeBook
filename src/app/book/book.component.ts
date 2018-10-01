import { Component, OnInit } from '@angular/core';
import {BookRequestServices} from "../services/booksRequest.services";
import { Book } from 'src/models/bookModel';
import {Cart} from 'src/models/cartModel';


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
  public cart:Cart= new Cart();

    constructor( private _bookRequest:BookRequestServices) {
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
}

