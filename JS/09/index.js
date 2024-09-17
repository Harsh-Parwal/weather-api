// used for api calling and all
// callback function has a problem called callback hell and promises used to write clean code and replace callback 
// function add(a,b,cb){   // higher order function
//     var result=a+b;
//     cb(result);         // this is callback function
// }
// add(2,5,function(values){
//     console.log(values);
// })
// OR
// add(2,5,(val)=>{
//     console.log(val);
// })
// OR
// function cb(val){
//     console.log(val);
// }
// add(4,2,cb);

function add(a,b,cb){
    let res=a+b;
    cb(res);
    console.log("back to higher-order function")
    return ()=>{
        console.log(res);
    }
}
let newFunc=add(4,9,(res)=>{
    console.log(res+5);
})
newFunc();