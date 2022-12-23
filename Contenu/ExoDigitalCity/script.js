"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banque = exports.Courant = exports.Personne = void 0;
class Personne {
    constructor(nom, prenom, dateNaiss) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaiss = dateNaiss;
    }
    get Nom() { return this.nom; }
    set Nom(v) { this.nom = v; }
    get Prenom() { return this.prenom; }
    set Prenom(v) { this.prenom = v; }
    get DateNaiss() { return this.dateNaiss; }
    set DateNaiss(v) { this.dateNaiss = v; }
}
exports.Personne = Personne;
class Courant {
    constructor(numero, solde, ligneDeCredit, persone) {
        this.numero = numero;
        this.solde = solde;
        this.ligneDeCredit = ligneDeCredit;
        this.persone = persone;
    }
    get Numero() { return this.numero; }
    set Numero(v) { this.numero = v; }
    get Solde() { return this.solde; }
    get LigneDeCredit() { return this.ligneDeCredit; }
    set LigneDeCredit(v) { this.ligneDeCredit = v; }
    get Personne() { return this.Personne; }
    set Personne(v) { this.Personne = v; }
    retrait(montant) {
        this.solde -= montant;
    }
    depot(montant) {
        this.solde += montant;
    }
}
exports.Courant = Courant;
class Banque {
    constructor(nom, prenom, dateNaiss) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaiss = dateNaiss;
    }
    get Nom() { return this.nom; }
    set Nom(v) { this.nom = v; }
    get Prenom() { return this.prenom; }
    set Prenom(v) { this.prenom = v; }
    get DateNaiss() { return this.dateNaiss; }
    set DateNaiss(v) { this.dateNaiss = v; }
}
exports.Banque = Banque;
// constructor(t:string, p:number, dop:string, a:string,th?:string[]){
//     this.title = t;
//     this.price = p;
//     this.dateOfParution = dop;
//     this.author = a;
//     this.theme = th;
// }
// promo() {
//     return this.price * 0.5;
// }
