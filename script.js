// function sayhello(){
//     console.log("hello world ")
// }
// sayhello()


//Q -2

// function add(a,b){
//     console.log(`${a+b}`)
// }
// add(5,10)

//Q-3

// function hi(name="guest"){
//     console.log(`hi ${name}`)
// }
// hi()

//Q-4

// function addunlimited(...val){
//     let sum = 0;
//  val.forEach(function(val){
//     sum = sum+val;
// });
//   console.log(sum)
// }
// addunlimited(5,6,11,20)


//Q-4

// function add(...val){
//     let sum = 0;
//      for(let i = 0; i<val.length; i++){
//         sum = sum + val[i];
       
//     }
//     console.log(sum)
// }
// add(5,6,9);

//Q-4 again

// function add(...val){
//      let ans = val.reduce(function(acc,val){
//         return acc+val;
//     } ,0);
//     console.log(ans)
// }
// add(5,6)

//Q-5


// (function run(){
//     console.log("i run instently")
// }) ();

//Q-6

// function print(){
//       let name = "hello"
//       function printName(){
//         console.log(name)
//       }
//       printName();
// }
// print();

//Q-7

    // let arr = ["apple","banana","mango","grapes"];
    // arr.push("kela");
    // arr.unshift("orange");

//Q-8

//  let arr = ["apple","banana","mango","grapes"];
//  for(let i = 0 ; i<arr.length; i++){
//     console.log(arr[i])
//  }

//Q-9

//  let obj ={
//     name : "diwan",
//     age : 21,
//     city : "katihar"
// }
// for( let key in obj){
//     console.log(key)
// }

//Q-10

// setTimeout(function(){
//     console.log("times up")
// },5000)

//Q-11

// function runtwice(hi){
//    hi();
// }
// runtwice(function(){
//     console.log("hello world")
// });

//Q-12
 
 
function diwan({name,age}){
    console.log(name,age);

}
diwan({name : "dilshad", age:27})