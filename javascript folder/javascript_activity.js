
// Part 1: Variables and Data Types

// Storing different types of data in variables
var message = "Hello, world!"; //string
var age = 25; //number
var isStudent = true; //boolean

// Displaying variables in console
console.log(message);
console.log("Age: " + age);
console.log("Is student? " + isStudent);

// Part 2: Functions and Scope

// Defining a function with parameters
function greet(name) {
    var greeting = "Hello, " + name + "!";
    console.log(greeting);
}

// Calling the function with arguments
greet("Gabe");  
greet("Bob");

// Accessing a variable inside and outside a function
var globalVar = "I am global";

function printVars() {
    var localVar = "I am local";
    console.log(localVar);
    console.log(globalVar);
}

printVars();

// Part 3: Arrays and Loops

// Iterating through an array
var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Part 4: Objects and Methods

// Creating an object with a method
var person = {
    name: "John",
    age: 30,
    sayHello: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Calling the method of an object
person.sayHello();

// Part 5: DOM Manipulation

// Getting an element by ID and modifying its content
var heading = document.getElementById("heading");
heading.innerHTML = "TEST TEST TEST TEST";

// Creating a new element and appending it to the document
var paragraph = document.createElement("p");
paragraph.innerHTML = "This is a new paragraph.";
document.body.appendChild(paragraph);

//me testing out what creating a new element does
var heading2 = document.createElement("h2");
heading2.innerHTML = "test of heading 2";
console.log(heading2);
document.body.appendChild(heading2);


function displayVariables() {
var output = document.getElementById('output');
output.textContent = 'Message: ' + message + ', Age: ' + age + ', Is student? ' + isStudent;
}

function displayGreeting() {
var output = document.getElementById('output');
output.textContent = greet('Alice');
}

function displayArray() {
var output = document.getElementById('output');
output.textContent = 'Numbers: ' + numbers.join(', ');
}

function displayPerson() {
var output = document.getElementById('output');
output.textContent = 'Person: ' + person.name + ', Age: ' + person.age;
person.sayHello();
}

