// function sayHello(){
//     console.log("helllo");
// }
// sayHello();

// var a=parseInt(prompt("enter num1")); // string to num
// var b=prompt("enter num2")*1;   // string to num
//             // arguments
// function add(a,b){
//     return a+b;
// }
//                //parameters
// var result=add(a,b);
// console.log(result);


// function addNumbers(){
//     let sum=0;
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i];
//     }
//     return sum;
// }
function addNumbers(...x){
    let sum=0;
    for(let i=0;i<x.length;i++){
        sum+=x[i];
    }
    return sum;
}
var result=addNumbers(3,2,0,5);
console.log(result);