"use strict";
class Personne {
    get Nom() { return this.nom; }
    set Nom(v) { this.nom = v; }
    constructor(nom) {
        this.nom = nom;
    }
}
class Enfant extends Personne {
    get Nom() { return super.Nom + " Enfant"; }
    constructor(nom) {
        super(nom);
    }
    sayHello() {
        console.log(`${this.Nom}`);
    }
}
const p = new Personne("Flavian");
const e = new Enfant("Flavian");
const eP = e;
const ieP = e;
console.log(p.Nom);
console.log(e.Nom);
console.log(eP.Nom);
