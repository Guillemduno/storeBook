import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  title : string = "This is the Fotter";
  year :number;
  constructor() {
   
   }

  ngOnInit() {
    var date :Date = new Date();
    this.year= date.getFullYear();
  }

}
