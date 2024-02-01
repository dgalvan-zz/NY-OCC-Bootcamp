function greet(){
    console.log('hello, welcome to functions');
}

greet()

//function declaration 

function declaration(){
    console.log('hello! I am a function declaratioin ');
}
declaration();

//function expressions 
const expresssion = function (){
    console.log('hello! i am a function expression');
}
expresssion()

//function parameters 
function greetings(name){
    console.log(`hello ${name}!`)
}
greetings('ron')


//with return value

function sum (a,b){
    return a+b
}
console.log(sum(5,6))

let result = sum(7,8)
console.log(result)

//global and local scope 

let globalvar = "i am a global variable"
function localscope(){
    let localvariable ="i am a local variable"
    console.log(localvariable);
    console.log(globalvar);

}
localscope()
console.log(globalvar)

function newsum(a,b){
    let c= a+b;
    return c;
}
console.log(newsum(2,3))


//highter order function 

//Higher-order function
function calculate(operation, num1, num2){
    return operation(num1, num2)
}

function addition(a,b){
    return a+b;
}

function subtraction(a, b){
    return a - b;
}

let Sum = calculate(addition, 6,5);
let Diff = calculate(subtraction, 9, 3);

console.log(`the answer to addition is: ${Sum}`);
console.log(`the answer to subtraction is ${Diff}`);