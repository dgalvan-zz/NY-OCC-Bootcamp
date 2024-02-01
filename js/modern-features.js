//moder JS features 

function greet(){
    console.log('hello');

}

//arrow functions 
const greets= ()=>{
    console.log('hello')
}

const square = (a) => a*a;
console.log (square(5));

// enhanced object literals 
const person = {
	name: "TJ",
	age: 21, 
    greetings(){
        //code block 
    }
}

//spread and rest operators 
//rest 
function myfunction(firstarg, ...restofargs){
    console.log(firstarg)
    console.log(restofargs)
}

myfunction('one', 'two', 'three','four')

//spread
function sum(x,y,z){
    return x+y+z;
}
const numbers =[1,2,3];
console.log(sum(...numbers));

//common built-in methodos
//arrays
//filters

let nums =[1,2,3,4,5,6,7,8];
const even = nums.filter((number)=> number%2==0);
console.log(even)

const odd = nums.filter((number)=> number%2 !==0);
console.log(odd)


// Strings
// Split

const message = "Hello, World!";
const words = message.split(", ");
console.log(words);

// Includes
const sentence = "The quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes("fox");
console.log(containsWord);

// length
const sampleString = "Welcome to Modern JS Features!";
console.log(sampleString.length);


// Objects
// keys
const keys = Object.keys(person);
console.log(keys);

// values
const values = Object.values(person);
console.log(values);

console.log(person);


//math
//max anaad min
 console.log(Math.max(10,5,20));
 console.log(Math.min(10,5,20));

 //rounding
 console.log(Math.round(3.6))

 //floor- rounding down
 console.log(Math.floor(3.6));

 //ceil- going up
 console.log(Math.ceil(3.1));

 //random
 console.log(Math.random()*100);

 //nested math methods
 console.log(Math.round(Math.random()*100))

 //other methods
 //fixed

 const pi= 3.141592
 console.log(pi.toFixed(3))

 //date
 const currentDay = new Date()
 console.log(currentDay)

 const christmas = new Date(2024,11,25);
 console.log(christmas)

 //tostring
 const numString = 38;
 const parsedString = numString.toString();
 console.log(parsedString+1)
