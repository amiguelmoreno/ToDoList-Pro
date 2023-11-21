const btnNewTask = document.getElementById("main-btn");
const modalForm = document.querySelector(".task-modal");
const pendingTasksContainer = document.querySelector(".pending");
const cancelBtn = document.querySelector(".cancel");

// New task data
const newTaskTitle = document.getElementById("new-task-title");
const newTaskDescription = document.getElementById("new-task-description");
const newTaskDate = document.getElementById("new-task-date");
const newTaskPriority = document.getElementById("new-task-priority");
const newTaskCategory = document.getElementById("new-task-category");

const tasks = [];

let lastTaskContainer = "";

///////////// Drag and Drop

document.addEventListener("DOMContentLoaded", function () {
  let containers = [
    document.querySelector(".pending .tasks"),
    document.querySelector(".doing .tasks"),
    document.querySelector(".done .tasks"),
  ];
  let drake = dragula(containers);
});

////////// Events listener

// Click in some add task btn
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("new-task")) return;

  togleNewTask();

  if (!modalForm.classList.contains(".hidden"))
    cancelBtn.addEventListener("click", togleNewTask);

  lastTaskContainer =
    e.target.closest(".tasks-container") || pendingTasksContainer;
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(lastTaskContainer);
});

function togleNewTask() {
  modalForm.classList.toggle("hidden");
}

function addTask(container) {
  const newTaskHtml = makeTaskHtml();
  const taskData = {
    title: newTaskTitle.value,
    description: newTaskDescription.value,
    date: newTaskDate.value,
    priority: newTaskPriority.value,
    category: newTaskCategory.value,
    state: "",
    id: null,
  };

  container
    .querySelector(".tasks")
    .insertAdjacentHTML("afterbegin", newTaskHtml);

  tasks.push(taskData);

  togleNewTask();
}

function makeTaskHtml() {
  return `
    <div class="task">
      <h3 class="task_title">${newTaskTitle.value}</h3>
      <div class="task_check"><input type="checkbox" /></div>
      <div class="status">
        <p class="task_due-date">🗓️ ${newTaskDate.value || "No Date"}</p>
        <p class="task_categorie">${newTaskCategory.value || "No Category"}</p>
        <p class="task_priority">${newTaskPriority.value || "No Priority"}</p>
      </div>
     </div>`;
}
