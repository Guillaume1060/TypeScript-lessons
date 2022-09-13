class Book {
    /// Déclaration d'une classe sans devoir tout répéter
    private bookID = 88;
    readonly libraryName = "the book shelf"

    constructor(
//// il faut bien ajouter le public pour creer la classe
        public title : string, 
        public price : number,
        public author : string,
        public dateOfParution : string,
        public theme? : string[],
        ){ }

    promo() {
        console.log ('id', this.bookID)
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
// console.log (onlyBook)


