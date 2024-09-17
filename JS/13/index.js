// const body=document.querySelector('body'); // jo b first element milega usko change krdega
// body.innerHTML="heheheheh";

// const h1=document.querySelector('h1');
// h1.innerHTML="changed";

// const ele=document.querySelector('div');
// console.log(ele.children);

const el=document.querySelectorAll('div');
el.forEach((e)=>{
    console.log(e.innerText);
})

