"use strict";
class Book {
    constructor(
    //// il faut bien ajouter le public pour creer la classe
    title, price, author, dateOfParution, theme) {
        this.title = title;
        this.price = price;
        this.author = author;
        this.dateOfParution = dateOfParution;
        this.theme = theme;
        /// Déclaration d'une classe sans devoir tout répéter
        this.bookID = 88;
        this.libraryName = "the book shelf";
    }
    promo() {
        console.log('id', this.bookID);
        return this.price * 0.5;
    }
}
const book1 = new Book("the great Gasby", 20, "11/04/1955", "Tom Joe");
console.log(book1);
console.log(book1.promo());
// On peut utiliser la class créé en tant que type 
const addToShelter = (obj) => {
    console.log("added to shelter", obj);
};
addToShelter(new Book("nana", 10, "20/10/1888", 'zola', ['roman']));
// 
let onlyBook = [];
onlyBook.push(new Book("nana2", 10, "20/10/1888", 'zola', ['roman']));
// console.log (onlyBook)
