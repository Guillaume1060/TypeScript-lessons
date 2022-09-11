// les unions

let code : string | number | boolean;
code = true;

let arr : (boolean | number) [];
arr = [1, true]


const foo = (param: number|string) => {
    console.log(param) }
foo('test')



/// types personnalisés :
type mixedNumStr = number | string;
type booleanOrObject = boolean | object;


const foo2 = (param: mixedNumStr | booleanOrObject) => {
    console.log(param) }
foo2('test2')
foo2(true)


type element = {
    x : number;
    y : number;
    id: number | string;
    visible: boolean
}
 
const button : element = {
    x : 99,
    y : 66,
    id: 'Dix-sept',
    visible: false
}