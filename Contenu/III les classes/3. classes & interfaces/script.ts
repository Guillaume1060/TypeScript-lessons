interface Country {
    name : string;
    population : number;
    lang : string[]
}


class Norway implements Country {
    constructor (
    public name : string,
    public population : number,
    public lang : string[],
    ) {}
}


const NorwayData = new Norway ('Norway', 9, ["Norvegian"]);
console.log(NorwayData);


class France implements Country {
    constructor (
    public name : string,
    public population : number,
    public lang : string[],
    ) {}
}

const FranceData = new France ('France', 59, ["Français", "ch'ti"]);
console.log(FranceData);

class HautDeFrance extends France {}

const HautDeFranceData = new HautDeFrance ('Nord', 5, ["ch'ti"]);
console.log(HautDeFranceData);