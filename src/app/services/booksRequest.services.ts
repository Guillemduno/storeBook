import{Injectable} from "@angular/core";
import{Http, Response, Headers} from "@angular/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BookRequestServices{
    public url:string;

    constructor(private _http:Http){
        //this.url = "https://jsonplaceholder.typicode.com/posts";
        this.url = "https://raw.githubusercontent.com/Guillemduno/List-of-books-/master/listofBooks.json";
       // this.url = "https://ghibliapi.herokuapp.com/films";
        
    }

    getItems(){
        return this._http.get(this.url).pipe(map(res => res.json()));
    }

    getId(id){
        return this._http.get(this.url+"/"+id).pipe(map(res => res.json()));
    }
}