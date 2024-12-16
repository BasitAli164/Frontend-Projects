let endDate=document.getElementById("endDate");
endDate.innerText="4 March 2025 12:00 AM"
let input=document.querySelectorAll("input");

function clock(){
    const end=new Date(endDate.innerText);
    const now=new Date();
    const diff=(end-now)/1000;
    console.log(parseInt(diff))
    input[0].value=Math.floor(diff / 3600 / 24)
    input[1].value=Math.floor((diff/3600)%24)
    input[2].value=Math.floor((diff/60)%60)
    input[3].value=Math.floor((diff)%60)
}

setInterval(() => {
    clock()
}, 1000);