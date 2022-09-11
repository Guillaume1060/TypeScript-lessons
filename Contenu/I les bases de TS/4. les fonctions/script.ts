function multiply(num1: number,num2 = 10, action?:string) {
    if (action) console.log (action);
    return num1*num2
}
console.log (multiply(2,5,'delete   '))
// le ? permet de rendre le paramètre faculattif


let foo: Function;
foo = () => {}


// Function signatures
let baz: (a:number, b:number) => number;
baz = (a,b,) => a + b;


// CallBack
function greetings(fn:(a:string) => void) {
    fn('hello world')
}

function printToConsole(msg :string) {
    console.log (msg)
}
greetings(printToConsole)