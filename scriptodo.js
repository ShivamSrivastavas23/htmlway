const inputBOX = document.getElementById("input-box");
const listContaiener = document.getElementById("list-container");
function addTask(){
    if(inputBOX.value === ''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContaiener.appendChild(li);
        let span=document.createdElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}
listContaiener.addEventlistener("click",function(e){
    if(e.target.tagname ==="li"){
        e,target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}.false); 

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getIten("data");
}
showTask();