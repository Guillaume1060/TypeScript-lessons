export class Personne {

    constructor(
        private nom: string,
        private prenom: string,
        private dateNaiss: Date
    ) { }

    get Nom(): string { return this.nom; }
    set Nom(v: string) { this.nom = v; }

    get Prenom(): string { return this.prenom; }
    set Prenom(v: string) { this.prenom = v; }

    get DateNaiss(): Date { return this.dateNaiss; }
    set DateNaiss(v: Date) { this.dateNaiss = v; }

}

export class Courant {
    constructor(
        private numero: number,
        private solde: number,
        private ligneDeCredit: number,
        private persone: Personne
    ) { }

    get Numero(): number { return this.numero; }
    set Numero(v: number) { this.numero = v; }

    get Solde(): number { return this.solde; }

    get LigneDeCredit(): number { return this.ligneDeCredit; }
    set LigneDeCredit(v: number) { this.ligneDeCredit = v; }

    get Personne(): Personne { return this.Personne; }
    set Personne(v: Personne) { this.Personne = v; }

    retrait(montant : number): void {
        this.solde -= montant
    }

    depot(montant : number): void {
        this.solde += montant
    }
}

export class Banque {

    

    constructor(
        private nom: string,
        private prenom: string,
        private dateNaiss: Date
    ) { }

    get Nom(): string { return this.nom; }
    set Nom(v: string) { this.nom = v; }

    get Prenom(): string { return this.prenom; }
    set Prenom(v: string) { this.prenom = v; }

    get DateNaiss(): Date { return this.dateNaiss; }
    set DateNaiss(v: Date) { this.dateNaiss = v; }

}

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


