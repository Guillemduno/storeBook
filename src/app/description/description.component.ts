import { Component, OnInit, Input } from '@angular/core';
import{ ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";


import{BookRequestServices} from "../services/booksRequest.services";
import {Book} from "src/models/bookModel";
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  providers:[BookRequestServices]
})
export class DescriptionComponent implements OnInit {
  public book:Book;
  constructor(  private route: ActivatedRoute, private bookRequestServices: BookRequestServices,
    private location: Location, private _cartService:CartService) {
    this.getIsbn();

     }

  ngOnInit() {
    
  }

  getIsbn(){
    let isbnNum = this.route.snapshot.paramMap.get('isbn');
    this.bookRequestServices.getIsbn(isbnNum).then((res : Book)=> {this.book=res;});
  }

  goBack(){
    this.location.back();
  }
  addBookToList(book){
    this._cartService.addBook(book);
  }
}
