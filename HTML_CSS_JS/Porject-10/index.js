const addBtn=document.querySelector("#addBtn");
const main=document.querySelector(".main");


addBtn.addEventListener(
    "click",
    function(){
       addNote();
    }
)

const saveNote=()=>{
    const notes=document.querySelectorAll(".note textarea");
    const data=[];
    notes.forEach((item)=>{
        return data.push(item.value);
    });
    localStorage.setItem("note",JSON.stringify(data))
   

}
const addNote=()=>{
    const note=document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
        <div class="tool">
                <img class="delete" src="delete.png" alt="" width="50">
                <img class="saveNotes" src="edit.png" alt="" width="50">
            </div>
            <textarea ></textarea>
    `;
    note.querySelector(".delete").addEventListener(
        'click',
        function(){
            note.remove();
        }
    )
    note.querySelector('.saveNotes').addEventListener(
        "click",
        saveNote()
    )
    main.appendChild(note)

}