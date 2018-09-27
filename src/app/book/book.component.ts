import { Component, OnInit } from '@angular/core';
import {BookRequestServices} from "../services/booksRequest.services";
import { Book } from 'src/models/bookModel';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers:[BookRequestServices]
})
export class BookComponent {
  public title:string ="Novels";
  public books :Book[];
    constructor( private _bookRequest:BookRequestServices) {
       this.getAllBooks();
      }

  ngOnInit(){
   
  }

  getAllBooks(){
    this._bookRequest.getBooks().then((books:Book[]) =>{
      this.books = books;
    }).catch(err => console.log(err));
  }
}
