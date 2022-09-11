"use strict";
class RocketFactory {
    constructor(reactors, vMax, price, carburant) {
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.carburant = carburant;
    }
    takeOff(action) {
        console.log(action);
    }
}
const Falcon1 = new RocketFactory(12, 900, 2, 9000);
console.log(Falcon1);
