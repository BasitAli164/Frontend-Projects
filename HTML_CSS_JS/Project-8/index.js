const slides=document.querySelectorAll('.slider');
console.log(slides)
let counter=0;
let heading=document.querySelector("#head")
slides.forEach((item,index)=>{
    item.style.left=`${index*100}%`
})


const goPrev=()=>{
    counter--;
    heading.innerHTML=counter
    slideImage()
}
const goNext=()=>{
    counter++;
    heading.innerHTML=counter
    slideImage()
}
const slideImage=()=>{
    slides.forEach((item)=>{
        item.style.transform=`translateX(-${counter*100}%)`
    })
}
console.log(heading)