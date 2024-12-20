const slides=document.querySelectorAll('.slider');
console.log(slides)
let counter=0;
let heading=document.querySelector("#head")
slides.forEach((item,index)=>{
    item.style.top=`${index*100}%`
})


const goPrev=()=>{
    if(counter<slides.length)
        {
        console.log(`couter is: ${counter} and slides lenght is: ${slides.length}`)
       
        counter--;
        heading.innerHTML=counter
        slideImage()
    }
}
const goNext=()=>{
    heading.innerHTML=counter
    if(counter<slides.length-1){
        console.log(`couter is: ${counter} and slides lenght is: ${slides.length}`)
    counter++;
    slideImage()
    }
}
const slideImage=()=>{
    slides.forEach((item)=>{
        item.style.transform=`translateY(-${counter*100}%)`
    })
}
console.log(heading)