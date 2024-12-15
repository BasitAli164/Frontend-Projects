let password=document.getElementById("password")
let message=document.getElementById("text")
let strenght=document.getElementById("str")

console.log("passord is:",password)

password.addEventListener('input',()=>{
    if(password.value.lenght >= 0){
        message.style.display="none"
    }else{
        message.style.display="block"
    }
    if(password.value.lenght > 4){
        strenght.innerHTML="week"
    }
})