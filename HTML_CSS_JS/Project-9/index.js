const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet='abcdefghijklmnopqrstuvwxyz';
const numberSet="0123456789";
const symbolSet="~`!@#$%^&*()_-=+?./,<>|\"'{}[]";

const upperInput=document.getElementById("upper-case");
const lowerInput=document.getElementById("lower-case");
const numberInput=document.getElementById("numbers");
const symbolInput=document.getElementById("symbols");
const passBox=document.getElementById("pass-box")
const totalChar=document.getElementById("total-char");



const getRandomData=(dataSet)=>{
    return dataSet[Math.floor(Math.random() * dataSet.length )]
}
const truncateString=(str, num)=>{
    if(str.length>num){
        let substr=str.substring(0,num);
        return substr;
    }else{
        return str
    }

}

const generatePassword=(password="")=>{
    if(upperInput.checked){
        password+=getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password+=getRandomData(lowerSet)
    }
    if(numberInput.checked){
        password+=getRandomData(numberSet)
    }
    if(symbolInput.checked){
        password+=getRandomData(symbolSet)
    }
    if(password.length<totalChar.value){
        return generatePassword(password)
    }
    passBox.innerText= truncateString(password,totalChar.value)
}
generatePassword()
document.getElementById("btn").addEventListener(
    'click',
    function(){
        generatePassword()
    }
)

