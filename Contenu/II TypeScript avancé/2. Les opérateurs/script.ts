// l'opérateur !
// le ! permet de dire que la valeur ne retournera jamais null et permet donc l'usage des méthodes

const container = document.querySelector("container")!;
console.log (container.children)


//l'opérateur ?
// -> permet de rendre par exemple une propriété facultative
//                        et
// -> permet d'appeler la méthode si elle peut être appelé > user1?.description 

type Job = {
    title : string;
    description? : string;
    salaire : number
}

const user1: Job = {
    title : "docteur",
    // description : "guérisseur",
    salaire : 40000
}
console.log(user1?.description)


/// Optionnal parameter 
function message (msg? : string) {
    if (msg) {
        console.log (msg)
    } else {
        console.log ("no message")
    }
}

/// Optionnal interface property
interface House {
    room : number;
    price : number;
    garage? : number;
}

const house1 : House = {
    room : 4,
    price : 300000
}


//// ?? double point d'interogation
const data = 0;
const display = data ?? "hello world";
/// au lieu de ci dessous
// const display = data || "hello world";
// cela permet d'avoir la valeur de data si data = 0 ou "".
// car sinon, 0 et "" sont considérés comme des valeurs null donc renvoi de helloworld


/// Never
function alertUser (msg:string) : never{
    throw msg;
}

alertUser('alerte, comportement dangereux')

