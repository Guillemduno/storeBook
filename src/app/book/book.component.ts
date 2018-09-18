import { Component, OnInit } from '@angular/core';
import{BooksServices} from "../services/books.services";
import {BookRequestServices} from "../services/booksRequest.services";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers:[BooksServices, BookRequestServices]
})
export class BookComponent {
  public t:string ="Random Books";
  public list_of_books:Array<string>;
  public bookToSave:string;
  public items;
    constructor( private _book:BooksServices, private _bookRequest:BookRequestServices) {
        
      }
  ngOnInit(){
    this._book.addTitle("Somebody to love");
    this._book.addTitle("Scary train");
    this.list_of_books = this._book.getTitles();
    console.log(this._bookRequest.getTest());
    
    this._bookRequest.getItems().subscribe(
      result =>{
          this.items = result;
          if(!this.items){
            console.log("Items not found...");
          }
          console.log(result);
      },
      error => {
        console.log("Can't request info");
      }
    );

  }

  saveBook(){
    this._book.addTitle(this.bookToSave);
    this.bookToSave = null; //Clean the input form.
  }

  deleteBook(index:number){
    this._book.deleteTitle(index);
  }
     
}
