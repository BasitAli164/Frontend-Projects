let userInput=document.getElementById("date");
userInput.max=new Date().toISOString().split('T')[0];
let result=document.getElementById("result")
function calculatingAge(){
    let birdthDay=new Date(userInput.value );
    console.log("DOB is: ",birdthDay)
    let d1=birdthDay.getDate();
    let m1=birdthDay.getMonth()+1;
    let y1=birdthDay.getFullYear();
    console.log(`Day is: ${d1}, Month is:${m1}, and Year is: ${y1} `)

    let today=new Date();
    console.log(`Today Date is: ${today}`)

    let d2=today.getDay();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();
    console.log(`Today Day is: ${d2}, Today Month is:${m2}, and  Year is: ${y1} `)

    let d3,m3,y3;
    y3=y2-y1;
    console.log(`total year is: ${y3}`)
    if(m2>=m1){
        m3=m2-m1;

    }else{
        y3--
        m3=12+m2-m1;
    }
    if(d2>=d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3=getDayInMonth(y1,m1)+d2-d1;

    }
    if(m3<0){
        m3=11;
        y3--;
    }
result.innerHTML=`Your  are <span>${y3}</span> Years,<span>${m3}</span> Months, and <span>${d3} </span> Days`
}
function getDayInMonth(year,month){
    return new Date(year,month,0).getDate();


}