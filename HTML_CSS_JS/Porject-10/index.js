const addBtn=document.querySelector("#addBtn");
const main=document.querySelector(".main");


addBtn.addEventListener(
    "click",
    function(){
       addNote();
    }
);

const saveNote=()=>{
    const notes1=document.querySelectorAll(".note textarea");
    const data=[];
    notes1.forEach((item)=>{
        return data.push(item.value,"1st time ");
    });
    if(data.length==0){
        localStorage.removeItem("note")
    }else{
        
        localStorage.setItem("note",JSON.stringify(data))

    }

}

const addNote=(text="")=>{
    const note=document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
        <div class="tool">
                <img class="delete" src="delete.png" alt="" width="50">
                <img id="saveNotes" src="edit.png" alt="" width="50">
            </div>
            <textarea >${text}</textarea>
    `;
    note.querySelector(".delete").addEventListener(
        'click',
        function(){
            note.remove();
            saveNote();
        }
    )
    note.querySelector('#saveNotes').addEventListener(
        "click",
        saveNote()
    )
    note.querySelector("#saveNotes").addEventListener(
        'focusout',
        function(){
            saveNote()
        }
    )
    main.appendChild(note)
    saveNote();

}
    (
    
        function(){
            const getNotes=JSON.parse(localStorage.getItem("note"))
            if(getNotes===null){
                addNote();
            }else{
                
                getNotes.forEach((item)=>{
                    addNote(item)
                })
                
            }

    
        }
    )()