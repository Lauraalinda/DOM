// object arrays
// let a =[3,4,6,7]
// console.log({a});//curly braces fr debugging purposes

//array constructor
// let b =new Array(3,4,6,7)
// console.log({b});//
// 
// array methods
// unshift -adds at the beginning
// push-at the end of an array
//shift- removes at the end
//map- iterstes thru every elemnt in an array and performs a fu
//find 
//filter
//for each
// let c =new Array(3,4,6,7,43,45)
// c.unshift(34)
// c.push(33)
// c.shift()
// console.log({c});//

// .map
// let c =new Array(3,4,6,7,43,45)
// let d=c.map(item=>item*2)
// console.log(d)
// 
// 
// maping on an array of strings
// let fruits=["Apple","Mango","Pineapple"];
// let newfruits= fruits.map(item=>item.toLocaleLowerCase())
// console.log(newfruits)

// operation
// let fruits=["Apple","Mango","pineapple"];
// let newfruits= fruits.map(item=>{
// if (item !==item.toLocaleLowerCase()){
// return item.toLocaleUpperCase()
// }
// return item
// })
// console.log(newfruits)
// 

// odd numbers
// let b =new Array(3,4,6,7,2)
// let oddNumbers= b.filter(item=> item%2 !==0)
// console.log(oddNumbers)


// let b =[3,4,6,7,2]
// console.log(b[1]);

// changing the Element
// b[1]=33
// console.log(b[1]);


// OBJECTS
// hlds key value pairs

// let person = {
    // name:"John",
    // age:20,
    // gender:"Female",
// 
// }

// console.log(person);
// let student = Object.create(person)//cloning person 
// console.log(student.name)
// changing the students name
// student["name"]="Mary"//name is in quotes because it is a string
// console.log(student.name);

// changing age method 2(dot notation)
// student.age=25
// console.log(student.age);

// accessing value
// console.log(person["gender"]);
//or
// console.log(person.gender);

//adding a property outside the object
// person.country="Malaysia"
// console.log(person)
// using indexing
// person["nationality"]="Malaysian"
// console.log(person)

// Methods
// a property whose value is a function
// let person = {
    // name:"John",
    // age:20,
    // gender:"Female",
    // hobby:()=> "i love coding"
// 
// }

// let person = {
    // name:"John",
    // age:20,
    // gender:"Female",
    // hobby:(activity)=>`I love ${activity}`//this is a function 
    // or u use hobby: function(){
        // return `I love coding`
    // }
// 
// console.log(person.hobby());
// console.log(person.hobby("coding"))


// let person = {
    // name:"John",
    // age:20,
    // gender:"Female",
    // hobby: function(activity){
    //   return `My name is ${this.name} I love ${activity}`
    //this  refers to the person object because we are inside the 
    // scope of the function
// }
// }
// console.log(person.hobby("coding"));

// using arrow functionlet 

// let person = {
    // name:"John",
    // age:20,
    // gender:"Female",
    // hobby:(activity)=>`My name is ${person.name} I love ${activit
// }
// console.log(person.hobby("coding"))

// CLASSES AND CONSTRUCTOR FUNCTIONS
// class Student{
    // constructor(name,age,gender){
        // this.name = name
        // this.age = age
        // this.gender = gender
    // }
// }
// 
// let studentAlinda = new Student("Ephy", 21 ,"Female")
// console.log(studentAlinda)

// prototypes
// used to add properties and methods to a class
// Student.prototype.nationality="Kenyan"
// console.log(studentAlinda.nationality)
// console.log(studentAlinda)
//adding a property to the 
// studentAlinda["nationality"]="Kenyan"
// console.log(studentAlinda)
// 
// if you want it to change according to the student u create
// Student.prototype.nationality=function(){
    // return `I am from ${nationality}`
// }

// FUNCTION CONSTRUCTORS
// function Student(name,age,gender){
    // this.name=name
    // this.age= age
    // this.gender = gender
// }
// let student=new Student("Jane",23,"female");
// console.log(student);
//they still work the same way
//u can use prototypes to add methods or classes

// ...read inheritance

// POLIFILING
// (Babel js takes js es6 and changes it to js es5)
// 
// TRANSPILING
// using tools to change new js to es5
// using babel usualyy in react



// 20/07/22
// DESTRUCTURING
// let num =[2,5,8,9]
// let [a,b,c,d]=num;
// console.log({a});
// console.log({b});
// console.log({c});
// console.log({d});
// 

// spread operators
// rest operators
// put 3 dots then name of var
// let num =[2,5,8,9]
// let [a,b,...others]=num;
// console.log({a});
// console.log({b});
// console.log({others})


// Destructuring objects
// in destructuring objects u use the same name as the key

// let person ={
    // name:"laura",
    // age: 30,
    // class:"hopperlab"
// }
// let{student, people}=person;
// console.log(student)//will beig undefined coz its not the right v
// the variable name represents the key
//student rep name
//people rep people

// let{name, age}=person;
// console.log(name);

// spread operator
// let{name, ...people}=person2;
// console.log(people);

// MODULES EXPORTS AND IMPORTS
// Imports to import dependencies(they make
// work easier like bootstrap
// in dependencies u install(they are exported already)
// styled components(styling using javascript)

// CALL BACK AND PROMISES
// A call back gets called when the main function is ready for it
// like in event listeners it can only do sth if the button is click
// settime out takes in a cbf and a timer 


// setTimeout(function(){
    // console.log("Hopperlab");
// },1000)
// 
// let person ={
    // name:"laura",
    // age: 30,
    // class:"hopperlab"
//    }
// let{name, ...people} =person;
// console.log(name);
// console.log(people);
// 
// PROMISES
// An object that brings about an asyncronous operation
// pending
// fullfilled
// rejected
// new creates objects an instance of the promise constructor
// let promise=new Promise(function(resolve,reject){
//   resolve("You passed")
// })
// console.log(promise);

// example2
// let childpass=true;
// let promise=new Promise(function(resolve,reject){
    // if (childpass){
    // resolve("You passed")
//   }
//   else{
    //   reject("You failed")
//   }
// })
//   console.log(promise);
//   
//   you have to catch the rejection because it will break your code
// if u are consuming a an API
  
//   CHAINING
//   .then()
//   .catch()
//   .finally

//   let childpass=true;
//   let promise=new Promise(function(resolve,reject){
//    if (childpass){
//    resolve("You passed")
    // }
    // else{
    //  reject("You failed")
    // }
//   })
//   .then()
//   .catch()
//   .finally()
//  console.log(promise);
    // 

    // let childpass=false;
    // let promise=new Promise(function(resolve,reject){
    //  if (childpass){
    //  resolve("You passed")
    //   }
    //   else{
    //    reject("You failed")
    //   }
    // })
    // .then(()=>console.log("You are a smart child"))
    // .catch(()=>console.log("Its okay to fail"))
    // .finally(()=>console.log("You can be whoever you want to be")
//    console.log(promise);

//    error takes what ever value u wrote in the rejection function 
      
// let childpass=true;
// let promise=new Promise(function(resolve,reject){
//  if (childpass){
//  resolve("You passed")
//   }
//   else{
//    reject("You failed")
//   }
// })
// .then(()=>console.log("You are a smart child"))
// .then((result)=>console.log(result))
// .catch((error)=>{
    // console.log(error);
    // console.log("Its okay to fail")})
// .finally(()=>console.log("You can be whoever you want to be"))
// console.log(promise);

// The first state of a promise is pending thats why it frst prts pe

// ASYNC and AWAIT
// Async is the way we turn a normal functions to become asyncronous
// Await is where u are going to wait for a promise inside async
// let childpass=true;
// let promise=new Promise(function(resolve,reject){
//  if (childpass){
//  resolve("You passed")
//   }
//   else{
//    reject("You failed")
//   }
// })
// .then(()=>console.log("You are a smart child"))
// .then((result)=>result)
// .catch((error)=>{
//  console.log("Its okay to fail")
//  return error;})
// .finally(()=>console.log("You can be whoever you want to be"))
// 
// 
// 
// async function man(){
    // let boy =await promise;
    // console.log(boy);
    // console.log("Promises are fun")
    // 
// }
// man();
// 
// let person ={
    // name:"laura",
    // age: 30,
    // class:"hopperlab"
    //   }
// 
// let{name, ...people} =person;
// console.log(name);
// console.log(people);


// 27/07/22
// DOM