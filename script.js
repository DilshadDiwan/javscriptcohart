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

function addunlimited(...val){
    let sum = 0;
 val.forEach(function(val){
    sum = sum+val;
});
  console.log(sum)
}
addunlimited(5,6,11,20)
