interface IPersonne {
    sayHello(): void
}
class Personne {
    private nom: string | undefined
    private firstname: string | undefined


    get Nom(): string { return this.nom!; }
    set Nom(v: string) { this.nom = v; }

    constructor(nom: string) {
        this.nom = nom;
    }
}

class Enfant extends Personne implements IPersonne {

    get Nom(): string { return super.Nom + " Enfant"; }

    constructor(nom: string) {
        super(nom)
    }

    sayHello(): void {
        console.log(`${this.Nom}`)
    }

}

const p: Personne = new Personne("Flavian");
const e: Enfant = new Enfant("Flavian");
const eP: Personne = e;
const ieP: IPersonne = e;

console.log(p.Nom);
console.log(e.Nom);
console.log(eP.Nom);




