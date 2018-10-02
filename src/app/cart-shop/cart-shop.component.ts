import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import{BookRequestServices} from "../services/booksRequest.services";
import {Book} from "src/models/bookModel";
import {Cart} from "src/models/cartModel";
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.css'],
  providers:[BookRequestServices]
})
export class CartShopComponent implements OnInit {
  public bookCart: Book;
  public listBooksCart:Book[] = new Array;
  constructor(private _route:ActivatedRoute, private _bookRequest: BookRequestServices, private _location:Location, private _cartService: CartService ) { 
    this.getIsbn();
    this.listBooksCart = this._cartService.cart.listCartBooks;
  }

  ngOnInit() {
   
  }
  getIsbn(){
    let isbnNum = this._route.snapshot.paramMap.get('isbn');
    this._bookRequest.getIsbn(isbnNum).then((res : Book)=> {this.bookCart=res;});
  }

  goBack(){
    this._location.back();
  }

  delete(i:number){
    this._cartService.cart.deleteBookFromCart(i);
    console.log("Book deleted!");

  }
}
