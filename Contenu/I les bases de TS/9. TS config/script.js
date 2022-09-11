"use strict";
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];
console.log(arr2);
const pNodeList = document.querySelectorAll('p');
const arrFromNodeList = [...pNodeList];
