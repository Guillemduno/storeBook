import { Book } from "./bookModel";

export class Cart{
    public listCartBooks:Book[] = new Array;
    constructor(){
    
    }

    addBookToCart(book : Book){
        this.listCartBooks.push(book);
        console.log("bookAdded!");
        console.log(this.listCartBooks);
    }

    deleteBookFromCart(){
        this.listCartBooks.slice(0, 0);
    }

    getBooksFromCart(){
        for(var i = 0; i<this.listCartBooks.length; i++){
           // console.log(this.book);
        }
    }

} 