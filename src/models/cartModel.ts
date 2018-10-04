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
        return this.addBookToTotal();;
    }

    addBookToTotal(){
        let total=0;
        for(let i = 0; i<this.listCartBooks.length; i++){
            total = total + this.listCartBooks[i].price;
        }
       return total;
    }
} 