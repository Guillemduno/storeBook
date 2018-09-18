import{Injectable} from "@angular/core";
import{Http, Response, Headers} from "@angular/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BookRequestServices{
    public url:string;

    constructor(private _http:Http){
       // this.url = "https://jsonplaceholder.typicode.com/posts";
        this.url = "https://ghibliapi.herokuapp.com/films";
        this.url = "https://reststop.randomhouse.com/resources/titles";
    }
    getTest(){
        return "Hi world!";
    }

    getItems(){
        return this._http.get(this.url).pipe(map(res => res.json()));
    }

}