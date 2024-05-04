const inputValue = document.getElementById('input-box');
const listItem = document.getElementById('list-container');
function addItem() {
    if(inputValue.value === '') {
        alert('Please Enter Something!!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputValue.value;
        listItem.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        inputValue.value = ""; 
         }
         saveData();
             
}

listItem.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
},false);

function saveData() {
    localStorage.setItem("data",listItem.innerHTML);
}

function showList() {
    listItem.innerHTML = localStorage.getItem("data");
}
showList();