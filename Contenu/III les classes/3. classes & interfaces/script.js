"use strict";
class Norway {
    constructor(name, population, lang) {
        this.name = name;
        this.population = population;
        this.lang = lang;
    }
}
const NorwayData = new Norway('Norway', 9, ["Norvegian"]);
console.log(NorwayData);
class France {
    constructor(name, population, lang) {
        this.name = name;
        this.population = population;
        this.lang = lang;
    }
}
const FranceData = new France('France', 59, ["Français", "ch'ti"]);
console.log(FranceData);
class HautDeFrance extends France {
}
const HautDeFranceData = new HautDeFrance('Nord', 5, ["ch'ti"]);
console.log(HautDeFranceData);
