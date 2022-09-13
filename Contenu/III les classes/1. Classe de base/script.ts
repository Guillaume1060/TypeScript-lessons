class Book {
    title : string;
    price : number;
    dateOfParution : string;
    author : string;
    theme? : string[]

    constructor(t:string, p:number, dop:string, a:string,th?:string[]){
        this.title = t;
        this.price = p;
        this.dateOfParution = dop;
        this.author = a;
        this.theme = th;
    }

    promo() {
        return this.price * 0.5;
    }
}


const book1 = new Book ("the great Gasby", 20, "11/04/1955", "Tom Joe")


console.log (book1)
console.log (book1.promo())


// On peut utiliser la class créé en tant que type 

const addToShelter = (obj: Book) => {
    console.log("added to shelter", obj)}

addToShelter(new Book("nana",10,"20/10/1888",'zola', ['roman']))


// 
let onlyBook : Book[] = [];
onlyBook.push(new Book("nana2",10,"20/10/1888",'zola', ['roman']));
console.log (onlyBook)

