const addBtn=document.querySelector("#addBtn");
const main=document.querySelector(".main")


addBtn.addEventListener(
    "click",
    function(){
       addNote();
    }
)
const addNote=()=>{
    const note=document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
        <div class="tool">
                <img src="delete.png" alt="" width="50">
                <img src="edit.png" alt="" width="50">
            </div>
            <textarea ></textarea>
    `
    main.appendChild(note)

}