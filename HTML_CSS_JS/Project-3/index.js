let date=document.getElementById("date");
let day=document.getElementById("day");
let month=document.getElementById("month")
let year=document.getElementById("year");

let today=new Date();

let dayName=["Sunday","Monday","Thuesday","Wednesday","Thursday","Friday","Saturday"];
let monthName=["January","February","March","April","May","June","July","August","September","October","November","December"]

date.innerHTML=today.getDate();
day.innerHTML=dayName[today.getDay()]
month.innerHTML=monthName[today.getMonth()]
year.innerHTML=today.getFullYear();