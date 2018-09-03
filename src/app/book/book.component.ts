import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book-model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public title:string ="Random Books";
  public books:Array<Book>; 
    constructor() {
        this.books=[
          new Book("/assets/kafka.jpg","3432-456-76-89-23", "Kafka en la orilla", "Haruki Murakami", "Best novel ever and forever", 13.99, 2300, true, "novel"),
          new Book("/assets/chica.jpg","3432-456-76-89-23", "La chica del cumpleaños", "Haruki Murakami", "Best novel ever", 34.20, 4000, true, "novel"),
          new Book("/assets/duro.jpg","3432-456-76-89-23", "Un tipo duro", "Jeff Lemire", "Best novel ever", 23.34, 200, true, "comic"),
          new Book("/assets/rebelde.jpg","3432-456-76-89-23", "Cuentos de buenas noches", "Varios artistas", "Tales of differetns charaters", 19, 340, true, "infantil"),
        
          new Book("/assets/kafka.jpg","3432-456-76-89-23", "Kafka en la orilla", "Haruki Murakami", "Best novel ever and forever", 23, 2300, true, "novel"),
          new Book("/assets/chica.jpg","3432-456-76-89-23", "La chica del cumpleaños", "Haruki Murakami", "Best novel ever", 12.69, 4000, true, "novel"),
          new Book("/assets/duro.jpg","3432-456-76-89-23", "Un tipo duro", "Jeff Lemire", "Best novel ever", 23, 200, true, "comic"),
          new Book("/assets/rebelde.jpg","3432-456-76-89-23", "Cuentos de buenas noches", "Varios artistas", "Tales of differetns charaters", 19, 340, true, "infantil"),
        
        ];
      }
  ngOnInit(){}
    showAlert(){
        alert(this.books[1].isbn);
    }
}
