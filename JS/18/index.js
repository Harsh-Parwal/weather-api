function getData(){
    let result=fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(result); // promise is returned
}
getData();

// in order to get data from url/server we use async function with await keyword
async function getData1(){
    let result=await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(await result.json());
}
getData1();

// OR

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })