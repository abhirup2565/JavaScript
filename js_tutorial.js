// console.log(75+75);
/*
let x ="Abhirup";
console.log(x);
console.log(typeof(x));

let y =12;
console.log(y);
console.log(typeof(y));

let z =12.5;
console.log(z);
console.log(typeof(z));

let b = true;
console.log(b);
console.log(typeof(b));

let a;
console.log(a);
console.log(typeof(a));
a="abhirup Singh"
console.log(a);
console.log(typeof(a));

let c;
console.log(c);
console.log(typeof(c));
*/

/*reference objects
//reference type variable
let emp={
    name:"abhirup",
    age:24,
    weight:77
};
console.log(emp);
console.log(emp.name);
console.log(typeof(emp));

//arrays
let courses=['hld','lld'];
console.log(courses);
console.log(typeof(courses));
console.log(courses[0]);
console.log(typeof(courses[0]));

//functions
creatingCourse("hld")
function creatingCourse(coursename) 
{
    console.log("creating "+coursename);   
}
creatingCourse("hld") 
creatingCourse("lld") 
*/


/*
console.log(a);
creatingCourse(a);
creatingCourse("hld");
function creatingCourse(coursename) 
{
    console.log("creating "+coursename);   
}
var a ="abhirup";
creatingCourse("hld");
creatingCourse("lld");
console.log(a);
*/

//first class variable
/*
let add =function (a,b)
{
    return a+b;
}
console.log(add(5,3));
*/

//higher order function
/*
function operations(operation)
{
    return operation(5,3);
}
function add (a,b)
{
    return a+b;
}
function subs (a,b)
{
    return a-b;
}
console.log(operations(subs));
*/

//arrow function
/*
let add = (a,b)=>
{
    return a+b;
}
console.log(add(5,3));
*/

//closures
// var msg="abhipreet";
function outer(msg){
    
    function inner()
    {
        console.log(`Hello how are you ${msg}`);
    }
    return inner;
}
let a = outer("hi");
a();