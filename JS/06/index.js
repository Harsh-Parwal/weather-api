// for(let i=0;i<10;i=i+1){
//     console.log(i);
// }

// let ip=0;
// let homeDist=20;
// while(ip!=homeDist){
//     ip++;
//     console.log("step number "+ ip);
// }

// let sp=0;
// let dist=10;
// do{
//     sp+=2;
//     console.log("number "+sp);
// }while(sp<=dist);

// var number=40;
// var guess=parseInt(prompt("guess the number ~0?"));
// while(guess!=number){
//     guess=parseInt(prompt("guess the number? ~0"));

// }
// console.log(number);
// alert("winner");

var number=40;
var guess=0;
do{
    guess=prompt("Guess the number?");
    if(guess==number){
        alert("winner");
        break;
    }
}while(guess!=0);
