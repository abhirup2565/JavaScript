// console.log('Hello');
// console.log("i love 0");
// window.alert("This is an alert");


//this is a comments
/*hello this 
is a multilen comments */

// document.getElementById("heading").textContent="HEllO ji";
// document.getElementById("para").textContent="I like pizza"
//-------------------------------------------------------------------------------------
// let x;//declaration assign undefine
// x=100;//assignment
// console.log(x);

// let age =25;
// let price = 10.99;
// let gpa =2.1;
// let firstName = "Abhirup";

// console.log(typeof firstName);
// console.log(typeof age);
// console.log(`you are ${age} years old`);
// console.log(`The price of apple is ${price}`);
// console.log(`Your gpa is ${gpa}`);
// console.log(`Your name is ${firstName}`)

// let online = true;
// console.log(typeof online);
// console.log(`Abhirup sing is online ?: ${online}`)


// let fullname = `Abhirup Singh`;
// let age = 23;
// let student = false;

// document.getElementById("p1").textContent=`my name is ${fullname}`;
// document.getElementById("p2").textContent=`my age is ${age}`;
// document.getElementById("p3").textContent=`I am a student: ${student}`;

//-------------------------------------------------------------------------------------------------
// let students = 30;
// students+=1;
// students= students+30;
// students = students/2;
// students = students ** 2;
// let extra_students = students %4;
// students++;

// operation presedence
// left to right
// 1. paranthesis
// 2. exponents
// 3. multiplication , division and modulo
// 4. addition and substraction

// console.log(students);

//----------------------------------------------------------------------------------
/*input from user
1. Window prompt
2. HTML textbox
*/


// let username;
// username=window.prompt("what is your username");
// console.log(username);
// console.log(typeof username);

// let username
// document.getElementById("mysubmit").onclick = function(){
//     username = document.getElementById("mytext").value;
//     document.getElementById("heading").textContent=`Hello ${username}`
//     console.log(username)
// }

//--------------------------------------------------------------------------
// type conversion
// let age = window.prompt("hpw old are you");
// age = Number(age);
// age+=1;
// console.log(age,typeof age);

// let x;
// let y;
// let z;
// x=Number(x);
// y=String(y);
// z=Boolean(z);
// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

//-------------------------------------------------------------------------
//const if value is constant
//convention to use uppercase (exception string)
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of circle");
radius = Number(radius);

circumference=2*PI*radius;

console.log(circumference)