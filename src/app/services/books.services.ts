import{Injectable} from "@angular/core";

@Injectable()
    export class BooksServices{
        public book_name = "Tokyo BLues";
        public books_Array = ["There is no tomorrow", "When the sky falls"];

        test(book_name:string){
            return book_name;
        }

        addTitle(name:string):Array<string>{
            this.books_Array.push(name);
            return this.getTitles();
        }

        getTitles():Array<string>{
            return this.books_Array;
        }

        deleteTitle(index:number){
            this.books_Array.splice(index, 1);
            return this.getTitles();
        }

  
    }
