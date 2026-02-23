let tasks = [];


function addTask() {
let taskText = document.getElementById("task").value;
let subject = document.getElementById("subject").value;

if (taskText === "") {
alert("Please enter a task");
return;
}

let task = {
text: taskText,
subject: subject,
done: false
};
tasks.push(task);
displayTasks();
document.getElementById("task").value = "";
}


function displayTasks() {
let list = document.getElementById("taskList");
list.innerHTML = "";


let completed = 0;


tasks.forEach((task, index) => {
let li = document.createElement("li");
li.innerHTML = `${task.text} (${task.subject})`;


if (task.done) {
li.classList.add("completed");
completed++;
}
li.onclick = () => {
task.done = !task.done;
displayTasks();
};


list.appendChild(li);
});


document.getElementById("progress").innerText =
`Progress: ${completed}/${tasks.length} tasks completed`;

let percent = tasks.length === 0 ? 0 : Math.round((completed / tasks.length) * 100);
document.getElementById("progressBar").style.width = percent + "%";
document.getElementById("progressBar").innerText = percent + "%";
}
