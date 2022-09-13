"use strict";
// Tuple
let tuple;
tuple = [true, 20];
// tuple.push(4);
// défaut de pouvoir utiliser la méthode push mais à savoir.



// Enum (moins utilisé)
// const Roles = {
//     JAVASCRIPT: 1,
//     CSS: 2,
//     REACT: 3, }
// console.log (Roles.JAVASCRIPT)
//éuivaut à :
var Roles;
(function (Roles) {
    Roles[Roles["JAVASCRIPT"] = 1] = "JAVASCRIPT";
    Roles[Roles["CSS"] = 2] = "CSS";
    Roles[Roles["REACT"] = 3] = "REACT";
})(Roles || (Roles = {}));
;
console.log(Roles);
