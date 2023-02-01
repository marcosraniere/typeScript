"use strict";
const x = 12;
console.log(x);
// inferenca X annotation 
let y = 14;
console.log(y);
let nome = "João";
nome = "jose";
//tipos basicos  string, number, boolean
// obeject 
const myNumbers = [1, 2, 4];
// tuplas 
let mytuple;
// object literals -> {prop: value}
const user = {
    name: "João",
    age: 18,
};
user.age = 12;
// any -> tipo de dado que aceita qualquer valor 
let a = 0;
a = "teste";
// solução para o problema no any
// union type
let id = 10;
id = 20;
const userId = 10;
const produto = "teste";
console.log(userId);
var Size;
(function (Size) {
    Size["p"] = "pequeno";
    Size["m"] = "medio";
})(Size || (Size = {}));
const camisa = {
    name: "camisa",
    size: Size.p,
};
console.log(camisa);
// literal types
let teste;
// funções 
function sum(a, b) {
    return a + b;
}
