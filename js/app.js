const square = (a) => a*a;
const numSquare=5;
console.log ('the square of '+numSquare+" "+'is' +" "+square(numSquare));

const person = {
    firstname: 'durley', 
    lastname:'Galvan',
    age: 29,
}

    //template literals
    console.log(`Welcome ${person.firstname}  you are ${person.age} years old.`);

    //object destructuring 
const {firstname,lastname,age} = person;
console.log('First Name:',firstname);
console.log("Last Name:",lastname);

//spread

const array1 =[10,11];
const array2 =[12,13];
const array1and2 =[...array1, ...array2];
console.log("single array is:", array1and2)

//rectangle
function area  (l,w){
    area= l*w
    return area
    
}
console.log("the are aof the rectangle is:", area(4,3))
