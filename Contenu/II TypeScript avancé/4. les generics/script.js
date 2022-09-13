"use strict";
/// generics
const london = {
    name: 'london',
    pop: 10,
    additionalData: { area: 1572 }
};
const paris = {
    name: 'london',
    pop: 10,
    additionalData: [{
            undeground: true,
            lines: 57
        }, { restaurant: true, number: 1059 }]
};
// generics with functions
// CHECK LA VIDEO UDEMY PLUS FACIE POUR COMPRENDRE
const addReapairDate = (obj) => {
    const lastRepair = new Date();
    return Object.assign(Object.assign({}, obj), { lastRepair });
};
const auto1 = addReapairDate({ model: 'A1', km: 70000, price: 100000 });
console.log(auto1);
