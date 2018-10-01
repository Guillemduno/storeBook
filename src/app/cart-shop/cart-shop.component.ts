import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Location} from "@angular/common";
import{BookRequestServices} from "../services/booksRequest.services";
import {Book} from "src/models/bookModel";

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.css'],
  providers:[BookRequestServices]
})
export class CartShopComponent implements OnInit {
  public bookCart: Book;
  public listBooksCart:Book[] = new Array;
  constructor(private _route:ActivatedRoute, private _bookRequest: BookRequestServices ) { 
    this.getIsbn();
   
  }

  ngOnInit() {
    console.log();
  }
  getIsbn(){
    let isbnNum = this._route.snapshot.paramMap.get('isbn');
    this._bookRequest.getIsbn(isbnNum).then((res : Book)=> {this.bookCart=res;});
  }


}
