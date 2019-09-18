/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding makes it so that if there aren't any rules to apply then it defaults to the window object unless you are in strict mode where it will default to undefined.
* 2. Implicit makes it so that it only applies to the onjects with methods
* 3. New binding creates a new object and .this points to that object.
* 4. Explicit binding allows us to tell JavaScript to act on a certain value using call, apply or bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName () {
    console.log(`My name is ${this.name}`)
}

let person = {
    name: 'Ethan',
    sex: 'male',
    age: 18,
    hairColor: 'brown'
}

sayName();

// Principle 2

// code example for Implicit Binding

let personTwo = {
    name: 'Ethan',
    sex: 'male',
    age: 18,
    hairColor: 'brown',
    greet: function() {
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old!`)
    }
}
personTwo.greet();

// Principle 3

// code example for New Binding

function Movie(favourite){
    this.movie = favourite;
}

let myFavouriteMovie = new
Movie('Blade Runner 2049');

console.log(`My Favourite movie is ${myFavouriteMovie.movie}.`)

// Principle 4

// code example for Explicit Binding

function cat(){
    console.log(this.meow);
}

let myCat = {
    name: 'Lenka',
    meow: 'Meooww!'
}

cat.call(myCat);