const input_box = document.getElementById("input-box")
const list_container = document.getElementById("container")
const checkbox = document.createElement("input")

function save(){
    if(input_box.value === ''){
        alert("Task Required!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input_box.value;
        list_container.appendChild(li);
    }
    input_box.value = "";
}

