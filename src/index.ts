const x:number =12;

console.log(x);


// inferenca X annotation 


let y = 14; 

console.log(y);

let nome:string = "João";

nome = "jose";



//tipos basicos  string, number, boolean



// obeject 
 
const myNumbers:number []= [1,2,4];


// tuplas 

let mytuple: [number, string, string[]];



// object literals -> {prop: value}

const user: {name:string; age:number}={
    name:"João",
    age: 18,
};

user.age=12;

// any -> tipo de dado que aceita qualquer valor 

 let a:any =0;

 a= "teste";
 
 
 
 // solução para o problema no any
// union type

let id: string | number = 10;
 
id= 20;

 

 type myYdType = number | string

 const userId:myYdType =10;
 const produto:myYdType ="teste";

 console.log(userId);


 enum Size{
    p= "pequeno",
    m = "medio"
 }

 const camisa= {
    name: "camisa",
    size: Size.p,
 };
 console.log(camisa);

// literal types

let teste: "algum valor";


// funções 

function sum (a:number,b:number){
    return a+b 
}