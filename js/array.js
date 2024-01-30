//introductions to arrays 
//creating an Array

let superhero = ['spiderman', 'scarlet witch', 'hoemlander', "sailor moon","batman"]

//accesing array elements
console.log('hero 1;', superhero[0]);
console.log('hero 2;', superhero[1]);
console.log('the last hero;', superhero[superhero.length-1]);

//modifying array
superhero[3]="iro man"
superhero.push('captain planet')
superhero.pop()
console.log(superhero)


//array iteration 

for (let i=0; i<superhero.length; i++){
    console.log("the hero is ", superhero[i]);
}

superhero.forEach(function(hero){
    console.log("this hero is ", hero)
})

//array methods 
//length 
console.log("array length", superhero.length);

//index of
console.log("index of the value", superhero.indexOf('sailor moon'));

//includes
console.log("ainclude a value", superhero.includes('scarlet witch'));

//join
console.log("ajoin array", superhero.join('-'));

//slice
let slicearray = superhero.slice(1, 4)
console.log("slice array", slicearray);

//split
let removeelem = superhero.splice(2,3);
console.log('removed elem;', removeelem);

console.log(superhero);