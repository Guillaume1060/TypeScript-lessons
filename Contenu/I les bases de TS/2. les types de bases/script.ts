let str : string = "str"
let num = 5
let array = []
let obj = {}
let toggle = true

/// anything permet de ne pas typer une variable
let anything;

/// ici typage manuel
let randomnNumber : number;

const conversion = (celsius : number) => {
    return (celsius * 9/5) + 32;
}

console.log (conversion(10))