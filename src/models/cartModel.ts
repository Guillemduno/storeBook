import { Book } from "./bookModel";

export class Cart{
    public listCartBooks:Book[] = new Array();
    public total: number;
    public priceRemove:number;
    constructor(){
        this.priceRemove=0;
    }

    addBookToCart(book : Book){
        this.listCartBooks.push(book);
        console.log("bookAdded!");
        console.log(this.listCartBooks);
    }

    deleteBookFromCart(numIndex: number){
        this.priceRemove =this.listCartBooks[numIndex].price;
        this.total = this.total - this.priceRemove ;
  
        this.listCartBooks.splice(numIndex, 1);
        return this.total;
      
    }

    addBookToTotal(){
        this.total=0;
        for(let i = 0; i<this.listCartBooks.length; i++){
            this.total = this.total + this.listCartBooks[i].price;
        }
       return this.total;
    }

} 