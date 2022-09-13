"use strict";
// Intersection (mélange de deux types personnalisées)
const shark1 = {
    fin: 3,
    element: "water",
    gills: true,
    weight: 500,
    length: 150,
};
let obj;
const RedRose = {
    pollen: true,
    type: "vegetal",
    color: "red",
    thorn: true,
};
const automaticResponse = (country) => {
    if (country.lang === "JA") {
        console.log("Hello Japan");
    }
    else if (country.lang === "IT") {
        console.log("hello Italy");
    }
};
const Japanese1 = {
    lang: "JA",
    food: ["ramen", "sushis"]
};
automaticResponse(Japanese1);
const spainTrip = {
    john: { id: 1 },
    Pierre: { id: 2 },
    Arthur: { id: 3 },
};
