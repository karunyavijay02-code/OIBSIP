function addTask(){

let input =
document.getElementById("taskInput");

let task =
input.value.trim();

if(task === ""){
alert("Please enter a task");
return;
}

let now = new Date();

let time =
now.toLocaleString();

let li =
document.createElement("li");

li.innerHTML = `
<div class="task-info">
<strong>${task}</strong>

<div class="task-time">
Added: ${time}
</div>
</div>

<div class="actions">

<button onclick="completeTask(this)">
✓
</button>

<button onclick="editTask(this)">
Edit
</button>

<button onclick="deleteTask(this)">
Delete
</button>

</div>
`;

document
.getElementById("pendingList")
.appendChild(li);

input.value="";
}

function completeTask(button){

let task =
button.parentElement.parentElement;

button.remove();

document
.getElementById("completedList")
.appendChild(task);
}

function deleteTask(button){

button.parentElement
.parentElement
.remove();
}

function editTask(button){

let taskText =
button.parentElement
.parentElement
.querySelector("strong");

let updated =
prompt(
"Edit Task",
taskText.innerText
);

if(updated){
taskText.innerText =
updated;
}
}