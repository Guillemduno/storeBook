import { Injectable } from '@angular/core';
import {Cart} from "src/models/cartModel";
import { Book } from '../../models/bookModel';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart:Cart= new Cart();
  public num:number;
  constructor() { 
  
  }

  addBook(x:Book){
    this.cart.addBookToCart(x);
    console.log("BookAddedfromService");
  }

  deleteBook(idNum:number){
    this.cart.deleteBookFromCart(idNum);
  }
}
