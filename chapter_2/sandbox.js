// alert('hello, world');

// let age = 25;
// let email = 'eddie@e11world.com';
// let firstName = 'Eddie';
// let lastName = 'Potros';
// let fullName = firstName + ' ' + lastName;


// console.log(age);
// console.log(firstName + ' ' + lastName);
// console.log(email[0]);

// console.log(fullName.toUpperCase());
// console.log(email.indexOf('@'));
// console.log(email.lastIndexOf('1'));
// console.log(email.slice(0,10));
// console.log(email.substr(0,10));
// console.log(email.replace('d', 'D'));



// order of operation B I D M A S ( bracket indiceis division multiplication addition subtraction )

// math operators + - * / ** %
// Operator	Description
// +	    Addition
// -	    Subtraction
//- *	    Multiplication
//- **	    Exponentiation (ES2016)
// /	    Division
// %	    Modulus (Remainder)
// ++	    Increment
// --	    Decrement

// let radius = 10;
// const pi = 3.14;
// let result = radius % 3;
// let result = pi * radius ** 2;

// console.log(radius, pi);

// console.log(10 / 2);

// let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;
// likes +=10;
// likes -=5;
// likes /=2;
// likes *=2;

// NaN = not a number
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes';
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// console.log(result);

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author;

// template string way
// let result = `The blog called ${title} by ${author}`;

// creating html templates
// let html = `<h2>${title}</h2>
{/* <p>By ${author}</p> */}
// `;

// console.log(html);



// let ninjas = ['eddie', 'mike', 'shawn'];
// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 33];
// console.log(ages[2]);

// let random = ['eddie', 'potros', 37];
// console.log(random[2]);

// array methods

// let result = ninjas.join(', ');
// let result = ninjas.indexOf('eddie');
// let result = ninjas.concat(['ken', 'sugar']);
// let result = ninjas.push('ken');
// result = ninjas.pop();
// console.log(result);
// console.log(ninjas);



// let age;
// console.log(age, age + 3, `the age is ${age}`);
//             undefined NaN "the age is undefined"

// let age = null;
// console.log(age, age + 3, `the age is ${age}`);
//         null 3 "the age is null"


// let names = ['eddie', 'potros'];
// let age = 37;

// let result = names.includes('eddie');
// console.log(result);

// comparison operators
// console.log(age == 37);
// console.log(age == 27);
// console.log(age != 33);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age >= 20);
// console.log(age <= 20);


// let fName = 'Eddie';
// lower case letter is greater than uppercase
// console.log(fName == 'Eddie');
// console.log(fName == 'eddie');
// console.log(fName > 'ayad');
// console.log(fName > 'Ayad');

// loose comparison different type (string/number) can still be equal
// console.log(age == '37');
// console.log(age != 37);
// console.log(age != '37');

// // strict comparison (different types cannot be equal)
// console.log(age === 37);
// console.log(age === '37');
// console.log(age !== 37);
// console.log(age !== '37');



// type conversion
// let score = '100';
// if left as is, result is 1001
// score = Number(score);
// here we get the value of 100 + 1 = 101

// console.log(score + 1);
// console.log(typeof score);

// let result = Boolean(100);
// let result = Boolean(0);
// let result = Boolean('0');
// let result = Boolean('');
// console.log(result, typeof result);




// for loop

// for(let i = 0; i < 5; i++) {
    //  console.log('in loop: ', i);
// }
// console.log('loop done');

// const names = ['eddie' , 'mike', 'sean'];

// for(let i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }



// WHILE loop

// let i = 0;

// while(i < 5) {
    // console.log('in loop ', i);
    // i++;
// }

// while(i < names.length) {
//     console.log(names[i]);
//     i++;
// }


// DO WHLIE (RUN AT LEAST ONCE)
// let i = 3;
// do {
//     console.log('val of i is ', i);
//     i++;
// } while(i < 5);






// IF STATEMENTS

// const age = 21;

// if(age > 20) {
//     console.log('you are over 20 years old');
// }

// const ninjas = ['eddie' , 'mike', 'sean'];

// if(ninjas.length > 2) {
//     console.log("that's a lot of ninjas");
// }


const password = 'password1234';

// if(password.length >= 12) {
//     console.log('pass is very very good and long');
// } else if(password.length >= 8) {
//     console.log('password is ok');
// } else {
//     console.log('pass is bad');
// }

// LOGICAL OPERATORS OR || and AND &&

// if(password.length >= 12 && password.includes('@')) {
//     console.log('pass is very very good and long');
// } else if(password.length >= 8 || password.includes('@') && password.length > 5) {
//     console.log('password is ok');
// } else {
//     console.log('bad pass');
// }

// const scores = [50, 20, 25, 0, 31, 99, 11, 83];

// for(let i = 0; i < scores.length; i++) {
//     if(scores[i] === 0){
//         continue;
//     }
//     console.log('your score: ', scores[i]);
    
//     if(scores[i] === 99) {
//         console.log('congrats');
//         break;
//     }
// }
// if(!user) {

// }

// const removeLast = scores.pop();
// console.log(removeLast);
// const removeSome = scores.splice(1,2);
// console.log(removeSome);


// SWITCH STATEMENT

// const grade = 'D';

// switch(grade) {
//     case 'A':
//         console.log('got an A');
//     break;
//     case 'B':
//         console.log('got a B');
//     break;
//     case 'C':
//         console.log('got a C');
//     break;
//     case 'D':
//         console.log('got a D');
//     break;
//     case 'E':
//         console.log('got an E');
//     break;
//     default:
//         console.log('not correct');
// }




// let age = 30;

// if(true) {
//     let age = 40;
//     // age = 33;
//     let name = 'eddie';
//     console.log('inside 1st code block: ', age, name);
//     if(true) {
//         age = 44;
//         console.log('inside 2nd code block ', age);
//         var oldVar = '"global everywhere"';
//     }
// }

// console.log('outside code block: ', age, name, oldVar);








// function expression
// const speak = function(){
//   console.log('good day!');
// };

// greet();
// speak();

// // function declaration (will run even if called before in the code - moves up to top of file)
// function greet() {
//   console.log('hello world');
// }


// arguments & parameters (default values)
// const speak = function(name = 'eddie', time = 'night'){
//   console.log(`good ${time} ${name}`);
// };

// speak('mario', 'morning');
// speak();

// OLD regular function
// const calcArea = function(radius) {
//   // below are the same
//   // method 1
//   // let area = 3.14 * radius**2;
//   // return area;
//   // method 2
//   return 3.14 * radius**2;
//   // console.log(area);
// }

// NEW arrow function
// const calcArea = radius => {
  // WORKS WITH ONLY ONE PARAMETER or only () with no parameters
// const calcArea = (radius) => {
// };

// short version
// const calcArea = radius => 3.14 * radius**2;

// const a = calcArea(5);
// console.log('area is: ', a);


// const greet = () => 'hello, world';
// const result = greet();

// console.log(result);




// const bill = (products, tax) => {
//   let total = 0;
//   for(let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([10,15,30], 0.2));


// callback & foreach

// const myFunc = (callbackFunc) => {
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc(value => {
//   console.log(value);
// });
// myFunc(function(value){
  
// });



// let people = ['eddie', 'russel', 'david', 'nadim', 'rajiv'];

// people.forEach(function(person){
//   // console.log('something');
//   console.log(person);
// });

// arrow function style
// people.forEach((person, index) => {
//   console.log(index, person);
// });


// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// }
// people.forEach(logPerson);

// const ul = document.querySelector('.people');

// const people = ['eddie', 'russel', 'david', 'nadim', 'rajiv'];


// let html = ``;

// people.forEach(person => {
//   // people.forEach(function (person) {
//   // create html template
//   html += `<li style="color: cyan">${person}</li>`;
// })

// console.log(html);

// ul.innerHTML = html;




// OBJECTS

// OBJECT literals

// const blogs = [
//   { title: 'adobe max videos', likes: 30 },
//   { title: 'top 10 android apps', likes: 50 }
// ];


// let user = {
//   name: 'eddie',
//   age: 37,
//   email: 'eddiep@monark.com',
//   location: 'vancouver',
//   blogs: [
//     { title: 'adobe max videos', likes: 30 },
//     { title: 'top 10 android apps', likes: 50 }
//   ],
//   login: function() {
//     console.log('the user logged in');
//   },
//   // same as above with less code and regular function
//   logout() {
//     console.log('the user logged out');
//   },
//   // using the this to target whatever is inside it you need to use regular functions not arrow functions
//   logBlogs: function () {
//     // this.blogs
//     // console.log(this.blogs);
//     console.log('this user has written the following blogs:');
//     this.blogs.forEach(blog => {
//       console.log(blog.title, blog.likes);
//     })
//   }
// };

// console.log(user.name);
// console.log(user['name']);
// user['name'] = 'sarah';
// console.log(user.name);

// const key = 'location';

// console.log(user[key]);

// update property
// user.age = 33;
// console.log(user.age);


// user.logBlogs();



// MATH OBJECT

// console.log(Math.PI);


// const area = 7.7;
// console.log(Math.round(area)); // round to closest integer
// console.log(Math.floor(area)); // round down
// console.log(Math.ceil(area)); // round up
// console.log(Math.trunc(area)); // removes integer

// random numbers
// const random = Math.random();
// // random between 1 and 100
// console.log(Math.round(random * 100)); // round up



/* REFERENCE TYPES */

// primitive values (STORED ON THE STACK)

// stored once with two separate pointers below

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);
// if you change one, it affects only new values coming after
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);



// reference values (STORED ON THE HEAP)


let userOne = { name: 'eddie', age: 37 };
let userTwo = userOne;

console.log(userOne, userTwo);

// both will change when stored on the HEAP
userOne.age = 33;
console.log(userOne, userTwo);

















/*
nfn
sfc
clg
ctrl+shift+l for #
*/

