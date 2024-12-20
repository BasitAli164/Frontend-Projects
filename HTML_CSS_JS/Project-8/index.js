const slides=document.querySelectorAll('.slider');
console.log(slides)
let counter=0;
slides.forEach((item,index)=>{
    item.style.left=`${index*100}%`
})

const goPrev=()=>{
    counter--;
    slideImage()
}
const goNext=()=>{
    counter++;
    slideImage()
}
const slideImage=()=>{
    slides.forEach((item)=>{
        item.style.transform=`translateX(-${counter*100}%)`
    })
}