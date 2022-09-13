// Intersection (mélange de deux types personnalisées)

type Fish = {
    fin : number;
    element : "water";
    gills : true;
}

type Shark = {
    weight: number;
    length: number;
}


//// REQUIN MARTEAU
type HammerheadShark = Fish & Shark


const shark1: HammerheadShark = {
    fin: 3,
    element: "water",
    gills: true,
    weight:500,
    length:150,
}

let obj: {
    prop1: "a"
} & {
    prop2: "b"
}


///  lier des interfaces

interface Flower {
    pollen : true;
    type : "vegetal"
}

interface Rose extends Flower {
    color: string;
    thorn: boolean;
}

const RedRose: Rose = {
    pollen: true,
    type : "vegetal",
    color: "red",
    thorn : true,
}

// union discriminante

type Japan = {
    lang: "JA";
    food: string[];
}

type Italy = {
    lang: "IT";
    food: string[];
}

type Country = Japan | Italy;

const automaticResponse = (country: Country) => {
    if (country.lang === "JA") {
        console.log ("Hello Japan")
    } else if (country.lang === "IT")
    {
        console.log ("hello Italy")
    }
}

const Japanese1 : Country = {
    lang: "JA",
    food: ["ramen", "sushis"]
}

automaticResponse(Japanese1)


//// unknown number of props

interface Group {
    [name : string] : object;
}

const spainTrip :  Group = {
    john: {id:1},
    Pierre: {id:2},
    Arthur: {id:3},
}