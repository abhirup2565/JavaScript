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

// const PI = 3.14159;
// let radius;
// let circumference;
// radius = window.prompt("Enter the radius of circle");
// radius = Number(radius);
// circumference=2*PI*radius;
// console.log(circumference)

//-----------------------------------------------------------------------------
//counter
// const decreaseBtn=document.getElementById("decreaseBtn");
// const resetBtn=document.getElementById("resetBtn");
// const increaseBtn=document.getElementById("increaseBtn");
// const countLabel =document.getElementById("countLabel");
// let count =0;

// increaseBtn.onclick=function(){
//     count++;
//     countLabel.textContent=count;
// }
// decreaseBtn.onclick=function(){
//     count--;
//     countLabel.textContent=count;
// }
// resetBtn.onclick=function(){
//     count=0;
//     countLabel.textContent=count;
// }

//------------------------------------------------
//Math build in object
// let x =3;
// let y=2;
// let z=1;

// z=Math.round(x);
// z=Math.floor(x);
// z=Math.ceil(x);
// z=Math.trunc(x);
// z=Math.pow(x,y);
// z=Math.sqrt(81);
// z=Math.log(x);
// z=Math.sin(1);
// z=Math.cos(0);
// z=Math.tan(x);
// z=Math.abs(-25);
// z=Math.sign(-8);
// z=Math.max(x,y,z);
// a=Math.min(x,y,z);
// console.log(a);

//------------------------------------------
//random
// let randomNum=Math.random();
// console.log(Math.floor(randomNum*6)+1);
// //random range 
// let min=50;
// let max=100;
// console.log(Math.floor(randomNum*(max-min))+min);

//-----------Roll dice-----------------------
// let roll=document.getElementById("submit");
// let display=document.getElementById("display");
// let min=0;
// let max=6;
// let random;
// roll.onclick=function(){
//     random=(Math.random()*(max-min))+min;
//     display.textContent=random;
// }
//------------------------------------------------
//if statement
//check property
/*
let submit=document.getElementById('submit');
let display=document.getElementById('display');
let male=document.getElementById('male');
let female=document.getElementById('female');
let age;
submit.onclick=function(){
    age= document.getElementById('age').value;
    if(male.checked){
        console.log("male");
    }
    else if(female.checked)
    {
        console.log("female");
    }
    if(age>18){
    display.textContent=`you are an adult `;
    }
    else if(age>13){
        display.textContent=`you are teen `;
    }
    else{
        display.textContent=`you are a kid `;
    }
}
*/


//ternary operator
/*
let submit=document.getElementById('submit');
let display=document.getElementById('display');
let age;
submit.onclick=function(){
    age= document.getElementById('age').value;
    display.textContent=age>18?`you are adult `:`You are not an adult`;   
}
*/

//---------------switches----------
/*
let day=5;
switch(day)
{
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
}
*/

//String methods: all are passed by value
// charAt()
// indexOf()
// lastIndexOf()
// length
// trim()
// toUpperCase()
// toLowerCase()
// repeat()
// startsWith("")
// endsWith("")
// includes("")
// replaceAll("this","with this")
// padStart(15,"with this till lenght is 15")
// padEnd(15,"with this till lenght is 15")
/*
let str = " Abhirup Singh ";
console.log(str.charAt(4));
console.log(str.indexOf("i"));
console.log(str.lastIndexOf("i"));
console.log(str.length);
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.repeat(2));
console.log(str.startsWith("A"));
console.log(str.endsWith("h"));
console.log(str.includes("e"));
console.log(str.replaceAll("i","n"));
console.log(str.padStart(20,"n"));
console.log(str.padEnd(20,"n"));
*/


//--------------string slice---------------------
// slice(start,end)
// const EMAIL="abhirup2565@gmail.com";
// console.log(EMAIL.slice(0,EMAIL.indexOf('@')));
// console.log(EMAIL.slice(EMAIL.indexOf('@')));

//-----------Strict equality operator-------------------------
// =asignment operator
// ==equality operator: checks  value
// ===strict equality: checks value aswell as data type

// const PI=3.14;
// if("3.14"===PI)
// {
//     console.log("equal");
// }
// else
// {
//     console.log("not equal");
// }


//-----------------loops--------------------
//while
// let allow=false;
// while(!allow){
//     let msg=window.prompt("mummy can i go?");
//     if(msg==="go")
//     {
//         allow=true;
//     }
// }
//do while
// let allow=false;
// do{
//     let msg=window.prompt("mummy can i go?");
//     if(msg==="go")
//     {
//         allow=true;
//     }
// }while(!allow)
//for
// for(let i=1;i<=20;i++)
// {
//     console.log(i);
// }
//for(let fruit of fruits){}

//-------------number guessing game--------------------
// const max = 10;
// const min = 0;
// const ANS=Math.round((Math.random()*(max-min))+min);
// console.log(ANS)
// let guess;
// while(guess!==ANS)
// {
//     guess=Number(window.prompt("guess the no between 0 and 10"));
// }
// window.alert("You are correct");

//-------------functions----------------------
// function even(num)
// {
//     return num%2===0?true:false;
// }
// console.log(even(6));


//----------Arrays-----------------
// push() appends
// pop() remove last element
// unshift() append at front
// shift() remove from front
// length
// indexOf()
// sort()//changes to reference
// reverse()//changes to reference


// let fruits=["Apple","Banana","Grapes","Mango"];
// fruits.push("friut");
// fruits.pop();
// fruits.unshift("fruit");
// fruits.shift();
// console.log(fruits.length);
// console.log(fruits.indexOf("Apple"));
// console.log(fruits.includes("Apple"));
// fruits.sort();
// fruits.reverse();
// for(fruit of fruits)
// {
//     console.log(fruit);

// }

//----------------spread operator----------
//... unpacks iterables like array string
// let fruits=["Apple","Banana","Grapes","Mango"];
// console.log(...fruits);

//---------------rest parameter------------
// rest parameter bundle sperate element in an  array. 
// opposite to spread op


// function eat(...fruits)
// {
//     console.log(fruits);
// }
// eat("mango","banana","grapes","Apple")

//-------------------------Call back-----------------------
/*
a function that is passed as an argumrnt to another function
asynchronous
calling the function that was passed it argument after execting itself
call function b after executing a (callback b)

dis advantage: 1)callback hell 2)
*/
// function hello(callback){
//     console.log("Hello ji");
//     callback();
// }
// function bye(){
//     console.log("bye ji");
// }
// setTimeout(hello,5000,bye);

//-----------------for each()--------------
// display element seperately 
//for each return element,index,array
//syntax is unique

// let numbers=[1,2,3,4,5,6,7,8,9];
// numbers.forEach(double);
// numbers.forEach(display);

// function display(element){
//     console.log(element);
// }

// function double(element,index,array)
// {
//     array[index]=element*2;
// }

//------------map----------
//similar to for each but returns array after completion
//map takes function as an argument and passed each element as argument to that function

// const num=[1,2,3,4,5];
// const cubes=num.map(square);
// console.log(cubes);
// function square(element){
//     return Math.pow(element,3)
// }

//----------filter-----------------
//creates a new array by filtering out elements
//takes function as argument and passes each element as argument to that function

// let numbers =[1,2,3,4,5,6,7,8,9];
// let even=numbers.filter(isEven);
// console.log(even);
// function isEven(element){
//     return element%2===0;
// }

//----------Reduce--------------
//reduce array to single element 
//function take argument and return the value to it
//first value of function is taken as ans variable
//all iterative info are stored there

// let numbers =[1,2,3,4,5,6,7,8,9];
// let even=numbers.reduce(sum);
// console.log(even);
// function sum(acc,element){
//     console.log(acc);
//     console.log(element);
//     return acc+element;
// }

//---------arrow function---------
//concise way to write a function
// let a=()=>{
//     console.log("hello");
// }
// a();

//-----object----------
// a collection of realted properties or methods 
// can represent a real world object 
// object  = {
//     key:value ,
//     function ()
// }

// const person ={
//     name:"abhirup",
//     age:25,
//     isEmployed:true,
//     sayHello:()=>{return console.log("hi this is a function")}
// }
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.isEmployed);
// person.sayHello();

//---------------this-----------
// reference to the object where this is used. If no object refers to window context 
//does not work with arrow function
// const person ={
//     name:"abhirup",
//     age:25,
//     isEmployed:true,
//     sayHello:function(){
//         return console.log(`hi this is a ${this.name}`)},
// }
// person.sayHello();


//----------constructor-------------------
// function Car(make,model,year,color){
//     this.make=make;
//     this.model=model;
//     this.year=year;
//     this.color=color;
// }

// const car1= new Car("maruti","swift",2001,"white");
// const car2= new Car("ford","figo",2001,"black");
// console.log(car1);
// console.log(car2);

//----------class-------------
/*
ES6 feature provide more structured and cleaner way to work
it is blueprint
*/

// class Car{
//     constructor(make,model,year,color){
//     this.make=make;
//     this.model=model;
//     this.year=year;
//     this.color=color;
// }
// displayProduct()
// {
//     console.log(this.make);
//     console.log(this.model);
//     console.log(this.year);
//     console.log(this.color);
// }
// }
// const car1= new Car("maruti","swift",2001,"white");
// const car2= new Car("ford","figo",2001,"black");
// car1.displayProduct();
// car2.displayProduct();

//-------static-------------
/* 
defines properties or method that belong to class itself rather than the 
object crated from that  class 
*/
// class MathUtil{
//     static PI=3.14;
//     static getDia(radius){
//         return radius*2;
//     }
//     static getCir(radius){
//         return 2*this.PI*radius;
//     }
// }
// console.log(MathUtil.PI);
// console.log(MathUtil.getDia(10));
// console.log(MathUtil.getCir(10));

//-------------inheritance---------
// class Animal{
//     eat()
//     {
//         console.log(`${this.name} is eating`);
//     }
//     sleep()
//     {
//         console.log(`${this.name} is sleeping`);
//     }
// }
// class Rabit extends Animal{
//     name="Rabit";
// }
// const rabit = new Rabit()
// rabit.eat();
// rabit.sleep();

//---------super keyword-----------
/*that used in classes to call the constructor or access the properties or method 
of parent call
this= present object
super= parent object */

// class Animal{
//     constructor(name,type){
//         this.name=name;
//         this.type=type;
//     }
//     eat()
//     {
//         console.log(`${this.name} is eating`);
//     }
//     sleep()
//     {
//         console.log(`${this.name} is sleeping`);
//     }
// }
// class Rabit extends Animal{
//     constructor(name,type)
//     {
//         super(name,type);
//         this.jump=5;
//     }
// }
// const rabit = new Rabit("Robin","Terestrial")
// rabit.eat();
// rabit.sleep();


//------getter and setter----------
/*
getter=special method that make a property readable
setter= special method that make a property writeable

getter and setter are called when using this.attribute
so if name is same it will end it recursive call to avoid use this._variable
in constructor dont use _ or else you by pass set and get method
*/
class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

    set width(newWidth){
        if(newWidth>0){
            this._width=newWidth;
        }
        else{
            console.error("width must be positive");
        }
    }

    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight;
        }
        else{
            console.error("height must be positive");
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
}

const rect=new Rectangle(-100,-32);
console.log(rect.height);
console.log(rect.width);