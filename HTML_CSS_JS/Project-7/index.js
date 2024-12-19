let colorCode=document.getElementById("color");
const getColor=()=>{
    let randomNumber= Math.floor(Math.random()*16777215);
    const randomCode="#"+randomNumber.toString(16);
     colorCode.innerText=randomCode
    document.body.style.backgroundColor=randomCode
}
let button=document.getElementById("btn").addEventListener('click',getColor);


