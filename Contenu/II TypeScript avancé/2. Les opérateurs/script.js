"use strict";
// l'opérateur !
// le ! permet de dire que la valeur ne retournera jamais null et permet donc l'usage des méthodes
const container = document.querySelector("container");
console.log(container.children);
const user1 = {
    title: "docteur",
    // description : "guérisseur",
    salaire: 40000
};
console.log(user1 === null || user1 === void 0 ? void 0 : user1.description);
/// Optionnal parameter 
function message(msg) {
    if (msg) {
        console.log(msg);
    }
    else {
        console.log("no message");
    }
}
const house1 = {
    room: 4,
    price: 300000
};
//// ?? double point d'interogation
const data = 0;
const display = data !== null && data !== void 0 ? data : "hello world";
/// au lieu de ci dessous
// const display = data || "hello world";
// cela permet d'avoir la valeur de data si data = 0 ou "".
// car sinon, 0 et "" sont considérés comme des valeurs null donc renvoi de helloworld
/// Never
function alertUser(msg) {
    throw msg;
}
alertUser('alerte, comportement dangereux');
