const paragraph=[
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!',
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum inventore in quo doloremque porro possimus odit exercitationem pariatur expedita vel dicta minus vero eum consequatur? Voluptate exercitationem unde molestias!'
]
console.log(paragraph.length);
const itemValue=document.getElementById("item");
const dataContainer=document.getElementById("data")
const generator=function(){
    console.log("value is:",itemValue.value)
    if(isNaN(itemValue.value)|| itemValue.value<0 ||itemValue.value>15){
       let randomeIndex= Math.floor(Math.random() * paragraph.length)
       dataContainer.innerHTML=`<p style="margin-top:50px; font-size:20px ;text-align:center">${paragraph[randomeIndex]}</p> <br/>`
    }else{
        const data=paragraph.slice(0,itemValue.value)
        const paras=data.map((d)=>{
            return `<p style="margin-top:50px; font-size:20px ;text-align:center">${d}</p>`
        })
        dataContainer.innerHTML=paras.join('');
    }


}