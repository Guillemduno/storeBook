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
  public title:string ="Novels";
  public items;
    constructor( private _bookRequest:BookRequestServices) {
       
      }

  ngOnInit(){
 
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
}
