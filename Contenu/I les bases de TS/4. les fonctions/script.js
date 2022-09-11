"use strict";
function multiply(num1, num2 = 10, action) {
    if (action)
        console.log(action);
    return num1 * num2;
}
console.log(multiply(2, 5, 'delete   '));
// le ? permet de rendre le paramètre faculattif
let foo;
foo = () => { };
// Function signatures
let baz;
baz = (a, b) => a + b;
// CallBack
function greetings(fn) {
    fn('hello world');
}
function printToConsole(msg) {
    console.log(msg);
}
greetings(printToConsole);
