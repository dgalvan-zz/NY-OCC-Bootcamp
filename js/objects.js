//objects 
const person = {
    firstname: 'Jame', 
    lastname:  'Doe',
    age: 25,
    hobbies: ['reading', 'coding','hiking'],

    greet: function () {
        console.log('hello, my name is', this.firstname, 'nice to meet you');
    }
};

//accesing objects 
console.log(person.lastname)
console.log(person.age)


//modifying object properties
person.lastname='smith';
console.log(person.lastname)


//accsessing object message
person.greet()

//adding new property
person.nationality = 'American';
console.log(person.nationality)

//adding new methods to the object 
person.introduce = function(){
    //template literals
    console.log(`I am ${this.firstname} ${this.lastname}. I am ${this.age}.`);

};
person.introduce()

//nesting objects 
const address={
    street: '123 main st',
    city: 'new york',
    country: 'USA'
};

person.location = address;
console.log(person.location.street);

//object destructuring 
const {firstname,lastname,age} = person;
console.log(firstname);
console.log(person.hobbies);
