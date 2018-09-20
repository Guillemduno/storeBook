import { Component, OnInit, Input } from '@angular/core';
import{ ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

import{BookRequestServices} from "../services/booksRequest.services";
import {Book} from "src/models/bookModel";


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  providers:[BookRequestServices]
})
export class DescriptionComponent implements OnInit {
  public title:string = "Book description";
  public book:Book;
  constructor(  private route: ActivatedRoute, private bookRequestServices: BookRequestServices,
    private location: Location) {
    this.showId();

     }

  ngOnInit() {
    
  }

  showId(){
    debugger;
    let idNum = this.route.snapshot.paramMap.get('id');
    this.bookRequestServices.getId(idNum).subscribe((res : Book)=> {this.book=res;});
  }

  goBack(){
    this.location.back();
  }
}
