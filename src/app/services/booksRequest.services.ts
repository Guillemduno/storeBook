import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Book } from "src/models/bookModel";

@Injectable()
export class BookRequestServices {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = "https://raw.githubusercontent.com/Guillemduno/List-of-books-/master/listofBooks.json";
    }

    getBooks(): Promise<Book[]> {
        return this._http.get<Book[]>(this.url).toPromise();
    }

    getIsbn(isbn) :Promise<Book> {
        return new Promise((resolve, reject) => {
            this.getBooks().then((books: Book[]) => {
                for (var i = 0; i < books.length; i++) {
                    if (isbn == books[i].isbn) {
                        resolve(books[i]);
                    }
                }
            });
        });
    }
}