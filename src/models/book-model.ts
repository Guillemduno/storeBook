export class Book{
    constructor(
        public image:string,
        public isbn:any,
        public title:string,
        public author:string,
        public description:string,
        public price:number,
        public stock:number,
        public isFavourite:boolean,
        public genere:string
    ){}

    get isbnCode() :any{
        return this.isbn;
    }
}