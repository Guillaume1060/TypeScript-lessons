"use strict";
// type assertion
// let txt: string
// txt = "str"
// ASSERTION (PAS MEILLEUR OPTION)
// const form : HTMLFormElement = document.querySelector('form')!
// console.log (form.children)
// TYPE CASTING (MIEUX)
const form = document.querySelector('form');
console.log(form.children);
const input = document.querySelector('input');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
}
window.addEventListener('click', handleClick);
function handleClick(event) {
    console.log(event.clientX, event.clientY);
}
const paragraphsList = document.querySelectorAll('p');
