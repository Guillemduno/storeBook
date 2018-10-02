import { Book } from "./bookModel";

export class Cart{
    public listCartBooks:Book[] = new Array();
    constructor(){
    }

    addBookToCart(book : Book){
        this.listCartBooks.push(book);
        console.log("bookAdded!");
        console.log(this.listCartBooks);
    }

    deleteBookFromCart(numIndex: number){
        this.listCartBooks.splice(numIndex, 1);
    }

} 