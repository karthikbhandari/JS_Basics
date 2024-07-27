//task 1 - declare var - assign no. -- log the value
var num1 = 29;
console.log(num1);
//task 2 - declare let - assign string. -- log the value
let string1 = "karthik";
console.log(string1);

//Ac2 task1 - declare var const, assign boolean value, log value

const n = true;
console.log(n);

//Ac3 task1 - create variables of different datatypes
//and log each variable type using typeof operator 
var var1 = console.log(typeof(1));
var var2= console.log(typeof("kar"));
var var3= console.log(typeof(true));
let obj = {name: "karthik",age: 24}
console.log(typeof(obj))
let arr = [ "karthik","B", 24]
console.log(typeof arr);

//Ac4 task5 declare let, assign value, reassign value,log both
let name = 24;
name = 22;
console.log(name);

//ac5 task6 - reassign var declared with const and observe the error
const num = 44;
let num6 = 22;
console.log(num);

//feature req - variables types console log
var n1 = "karthik";
var age = 24;
var man = true;

console.log(n1)
console.log(typeof(n1))
console.log(age)
console.log(typeof(age))
console.log(man)
console.log(typeof(man))