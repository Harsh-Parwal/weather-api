// function sayHello(){
//     console.log("hello");
// }
// const sayHello=()=>{
// console.log("hello");
// }
// sayHello();
// sayHello();

// const addFunc=(a,b)=>{
    // return a+b;
// }
                        // one liner compute and return
// const addFunc=(a,b)=>a+b;
// console.log(addFunc(4,1));

// const addNum=(...nums)=>{
//     let sum=0;
//     for(let i=0;i<nums.length;i++){
//         sum+=nums[i];
//     }
//     return sum;
// }
// console.log(addNum(1,2,3,4,5)); 

var obj={
    value:90,
    seeValue: function(){
        return this;
    }
}
console.log(obj.seeValue());