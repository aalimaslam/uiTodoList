const $ = s=>document.querySelector(s);
const addBtn = $("#add-btn");
const form = $("form");
const container = $(".new-container");

form.addEventListener("submit",e=>{
    e.preventDefault();

    //Status Variable is used to check whether the input has to be readonly or not
    let status = 1;

    
    const mainInput = $("#main-input");

    if(!mainInput.value) return;
    
    //Creating a container

    const newInputContainer = document.createElement("div");
    newInputContainer.classList.add("new-input-container","bg-transparent","flex","j-content-around");
    container.appendChild(newInputContainer);

    //Creating Input and appending it to the container

    const newInput = document.createElement("input");
    newInput.readOnly = true;
    newInput.value = mainInput.value;
    mainInput.value = '';
    newInputContainer.appendChild(newInput);

    //Creating Edit Button And Remove Button

    const editBtn = document.createElement("i");
    const removeBtn = document.createElement("i");
    editBtn.classList.add("fas","fa-edit","bg-transparent","round","color-light")
    removeBtn.classList.add("fas","fa-trash","bg-transparent", "round", "color-light");
    newInputContainer.appendChild(editBtn);
    newInputContainer.appendChild(removeBtn);

    //adding functionality to the Edit Button

    editBtn.addEventListener("click",()=>{
        if(status == 1){
            newInput.readOnly = false;
            editBtn.classList.remove("fa-edit");
            editBtn.classList.add("fa-save");
            status = 0;
        }
        else if(status == 0){
            newInput.readOnly = true;
            editBtn.classList.add("fa-edit");
            editBtn.classList.remove("fa-save");
            status = 1;
        }
    })

    //adding functionality to the Remove Button

    removeBtn.addEventListener("click",()=>{
        container.removeChild(newInputContainer)
    })

})