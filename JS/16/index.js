function handleClick(){
    console.log("clicked1");
}

const btn2=document.getElementById('btn2');
btn2.onclick=()=>{
    console.log("clicked2");
}

const btn3=document.getElementById('btn3');  // best way because ye over-ride nhi hota jaise uper wala hoskta h
btn3.addEventListener('click',()=>{
    console.log("clicked3")
    let text=document.querySelector('#heading');
    text.style.color="red";
})