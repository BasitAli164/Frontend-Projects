let userInput=document.getElementById("date");
userInput.max=new Date().toISOString().split('T')[0];
function calculatingAge(){
    let birdthDay=new Date(userInput.value );
    console.log("DOB is: ",birdthDay)
    let d1=birdthDay.getDate();
    let m1=birdthDay.getMonth()+1;
    let y1=birdthDay.getFullYear();
    console.log(`Day is: ${d1}, Month is:${m1}, and Year is: ${y1} `)

    let today=new Date();

    let d2=today.getDay();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();

}