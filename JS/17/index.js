let btn=document.getElementById('btn');
let div=document.getElementById('my-container');
let count=1;
btn.addEventListener('click',()=>{
    let li=document.createElement('li');
    li.innerText=count;
    count++;  
    div.appendChild(li);
})