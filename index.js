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
// class Rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//     }

//     set width(newWidth){
//         if(newWidth>0){
//             this._width=newWidth;
//         }
//         else{
//             console.error("width must be positive");
//         }
//     }

//     set height(newHeight){
//         if(newHeight>0){
//             this._height=newHeight;
//         }
//         else{
//             console.error("height must be positive");
//         }
//     }

//     get width(){
//         return this._width;
//     }
//     get height(){
//         return this._height;
//     }
// }

// const rect=new Rectangle(-100,-32);
// console.log(rect.height);
// console.log(rect.width);

//------------destructuring------------
// extract values from array and objects, then assign them to variable in 
// a convienet way 

// const color=["red","green","blue","black","white"];
// [color[0],color[4]]=[color[4],color[0]];
// console.log(color);

//--------nested object-------------

// const employ={
//     ceo:"abhirup",
//     address:"kharghar",
//     jobs:['hr','tech','it'],
//     employee:{
//         id:"1",
//         name:"Singh",
//         role:"tech"
//     }
// }

// console.log(employ.ceo);
// console.log(employ.address);
// console.log(employ.jobs);
// console.log(employ.employee.id);
// console.log(employ.employee.name);
// console.log(employ.employee.role);

//------------sort method----------
/*
 method used to sort element of an array in place.
 sorts elements as  strings in lexicographic order , not alphabetical
 lexicographic = (alphabet+numbers+symbols) as strings
 */

//  let number = [3,2,1,9,8,7,6,5,4,10];
//  let names = ["abhirup","abhipreet","rinku","abhay"];
//  number.sort((a,b)=>a-b);//else would wrong sort 10
//  names.sort();
//  console.log(number);
//  console.log(names);

//-----------Date Object-----------------
/**
 * Date(Year,month,day,hour,minute,seconds,ms)
 */
// const date = new Date(2024,6,23,23,20,20,10);
// const date1=new Date("2021-06-02T12:00:00");
// console.log(date);
// console.log(date1);
// const date = new Date();
// const year=date.getFullYear();
// date.setFullYear(2001);
// console.log(date);

//------------------Closures---------
/**
 * a function defined inside of another functions
 * the inner function has access to the variables
 * and scope of the outer function
 * allow for private variables and state maintenance
 * used frequently in js frameworks
 */

// function increament()
// {
//     let counter=0;
//     function count()
//     {
//         counter++;
//         console.log(counter);
//     }
//     return count;
// }

// let a = increament();
// a();
// a();
// a();
// a();


//------set time out-----------
// function sayHello(){
//     window.alert("hello");
// }
// setTimeout(sayHello,3000);

//-------ES6 Module-----------
/**
 * an external file that contains reusable code that can be imported into other js files.
 * Write reusable code for many different apps.
 * can contain variables, classes ,functions .. and more
 * Introduce as part of ECMA Scripts 2015 update
 */

// import {PI,getCircumference,getArea,getVolume} from './mathUtil.js';

// console.log(PI);
// const circumference=getCircumference(10);
// const area = getArea(10);
// const volume= getVolume(10);

// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);
// console.log(`${volume.toFixed(2)}cm^3`);



//---------Async and Sync------------
/**
 * Synchronous=Executes line by line consecutively in a sequential manner
 * code that waits for an operations to complete.
 * 
 * async= Allows multiple operation to be performed concurrently wihtout waiting
 * Doesnt block the execution flow and allows the program to continue
 * hadled with: CallBacks,Promises ,Async/Await
 */

//-----------Error handelling -------------
/**
 * cause: Network ,Promise and Security
 * try:executes potential code 
 * catch:executes on error 
 * finally:Always execute
 */
// console.log("hello");
// let x=0;
// try{
//     console.log(x);
//     if(x==0)
//     {
//         throw new Error("x cannot be zero");
//     }
//     console.error("after x is zero");
// }
//  catch(error){
//      console.error(error);
//  }
//  finally{
//     console.log("this always execute usually to close connection");
//  }
// console.log("you have reached the end!");

//----------DOM-----------------
/**
 * DOM=Document Object Model
 * object{} that represents the page you see in the web browser and provides you with an api to interact with it
 * web browser constructs the dom when it loads an HTML document and structure all the  elements in a tree like representation
 * javaScript can access the dom to dynamically change the content,structure and style of a web page
 */
// const username ="Abhirup";
// const welcomeMsg = document.getElementById("welcome-msg");
// welcomeMsg.textContent+=username===""?` Guest`:` ${username}`;
// console.dir(document)

//--------------Element Selector----------------
/**
 * element selctors = Methods used to target and manipulate HTML elements 
 * They allow you to select one or multiple HTML elements
 * form the dom 
 */
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()//first match or none 
// document.querySelectorAll()
// const fruits=document.getElementsByClassName("fruits");
// console.log(fruits);
// fruits[0].style.backgroundColor="yellow";
// const fruitsEle=document.querySelector(".fruits");
// console.log(fruitsEle);

//--------------DOM Navigation----------------
/**
 * process of navigating through the structure the structure of  an HTML document using JAVASCRIPT
 * .firstElementChild
 * .lastElementChild
 * nextElementSibling
 * .previousElementSibling
 * .parentElement 
 * .children
 */
// const element =document.getElementById("fruits");
// const firstChild= element.firstElementChild;
// firstChild.style.backgroundColor="yellow";

// const ulElements=document.querySelectorAll("ul");
// ulElements.forEach( ulElement=>{
//     const firstChild=ulElement.firstElementChild;
//     firstChild.style.backgroundColor="yellow";
// })

// const element =document.getElementById("fruits");
// const lastchild=element.lastElementChild;
// lastchild.style.backgroundColor="Yellow";

//----------Add and change HTML---------------------
//appends and prepends work on id 
//on child of an id or parent use insetBefore(item,itembefore)
//step1: Create the element
//const newListItem=document.createElement("li");

//step2:Add attributes/properties
// newListItem.textContent="coconut";
// newListItem.id="coconut";
// newListItem.style.fontWeight="bold";
// newListItem.style.backgroundColor="lightgreen";

//Step3 Append element to dom
//document.body.append(newListItem);
//document.body.prepend(newListItem);
//document.getElementById("vegetables").append(newListItem);
//const vegetables=document.querySelectorAll(".vegetables li");
//document.getElementById("vegetables").insertBefore(newListItem,vegetables[1])


//Remove HTML ELement
//document.getElementById("vegetables").removeChild(newListItem);


//-------------event listner-------------
/**
 * Event =click, mouseover, mouseout
 * .addEventListner(event,callback)
 * event.target.property
 */
// const myBox=document.getElementById("myBox");
// myBox.addEventListener("click",changeColor);
// myBox.addEventListener("click",function (event){
//     event.target.style.backgroundColor="tomato";
//     event.target.textContent="Ouch!🤕";
// });
// myBox.addEventListener("click",(event)=>{
//     event.target.style.backgroundColor="tomato";
//     event.target.textContent="Ouch!🤕";
// });
// function changeColor(event){
//     event.target.style.backgroundColor="tomato";
//     event.target.textContent="Ouch!🤕";
// }
// myBox.addEventListener("mouseover",(event)=>{
//     event.target.style.backgroundColor="yellow";
//     event.target.textContent="Dont hurt me";
// });
// myBox.addEventListener("mouseout",(event)=>{
//     event.target.style.backgroundColor="lightgreen";
//     event.target.textContent="Click Me😃";
// });

//-----------Key events-----
// listen to specific events to create interactive web pages 
// events: keydown, keyup, 
// document.addEventListener(event,callback);
// const myBox=document.getElementById("myBox");
// const moveAmount=10;
// let x=0;
// let y=0;
// document.addEventListener("keydown",event=>{
//     myBox.style.backgroundColor="yellow";
//     myBox.textContent="I am Ejoying it";
// });
// document.addEventListener("keyup",event=>{
//     myBox.style.backgroundColor="lightgreen";
//     myBox.textContent="Click Me😃";
// });
// document.addEventListener("keyup",event=>{
//     myBox.style.backgroundColor="lightgreen";
//     myBox.textContent="Click Me😃";
// });

// document.addEventListener("keydown",event=>{
//    if(event.key.startsWith("Arrow")){
//     event.preventDefault();
//     myBox.style.backgroundColor="tomato";
//     myBox.textContent="stop it!"
//     console.log(event.key);
//     switch(event.key){
//         case "ArrowUp":
//             y-=moveAmount;
//             break;
//         case "ArrowDown":
//             y+=moveAmount;
//             break;
//         case "ArrowLeft":
//             x-=moveAmount;
//             break;
//         case "ArrowRight":
//             x+=moveAmount;
//             break;
//     }
//     console.log(x);
//     console.log(y);
//     myBox.style.top=`${y}px`;
//     myBox.style.left=`${x}px`;
//    }
// });
// document.addEventListener("keyup",event=>{
//     myBox.style.backgroundColor="lightgreen";
//     myBox.textContent="Click Me😃"});

//------------------Node List------
/**
 * Static collection of HTML elements by(id,class,element)
 * can be created by using querySelectorAll()
 * Similar to an array,but no (map filter reduce)
 * nodelist wont update to automatically reflect changes
 */


let buttons=document.querySelectorAll(".myButtons");
// console.log(buttons);
// buttons.forEach(button=>{
//     button.style.backgroundColor="green";
// });
buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        event.target.style.backgroundColor="green";
    })
});

