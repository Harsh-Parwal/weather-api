let students=["harsh","vardhan","singh","parwal"];
// let newArr=[];
// students.forEach((student)=>{
//     newArr.push(student);
// })
// console.log(newArr);

// let newArr=students.map((student)=>{
//     return student+'ok';
// })
// console.log(newArr);

const numbers=[3,2,4,8,9];
// let ans=numbers.findIndex((num)=> {
//     return num==4
// });
// console.log(ans);
// console.log(numbers.includes(2));
// let newArr=numbers.filter((num)=>{
//     return num%2==0;
// });
// console.log(newArr);
// let newArr=numbers.slice(2,4);
// console.log(newArr);
let newArr=numbers.splice(1,2);
console.log(newArr);
console.log(numbers);