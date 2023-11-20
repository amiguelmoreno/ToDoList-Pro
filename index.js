const btnNewTask = document.getElementById("main-btn");
const modalForm = document.querySelector(".task-modal");
const pendingTaskContainer = document.querySelector(".pending .tasks");
const doingTaskContainer = document.querySelector(".doing .tasks");
const doneTaskContainer = document.querySelector(".done .tasks");
const cancelBtn = document.querySelector(".cancel");

// New task
const newTaskTitle = document.getElementById("new-task-title");
const newTaskDescription = document.getElementById(
  "new-task-description"
).value;
const newTaskDate = document.getElementById("new-task-date");
const newTaskPriority = document.getElementById("new-task-priority");
const newTaskCategory = document.getElementById("new-task-category");

const tasks = [];

let lastTaskContainer = "";

cancelBtn.addEventListener("click", togleNewTask);

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("new-task")) return;

  togleNewTask();
  lastTaskContainer = e.target.closest(".tasks-container");
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  addTask(lastTaskContainer);
});

function togleNewTask() {
  modalForm.classList.toggle("hidden");
}

function addTask(state = pendingTaskContainer.closest(".tasks-container")) {
  const newTaskHtml = `
  <div class="task">
  <h3 class="task_title">${newTaskTitle.value}</h3>
  <div class="task_check"><input type="checkbox" /></div>
  <div class="status">
    <p class="task_due-date">${newTaskDate.value}</p>
    <p class="task_categorie">${newTaskCategory.value}</p>
    <p class="task_priority">${newTaskPriority.value}</p>
  </div>
</div>`;

  console.log(pendingTaskContainer.closest(".tasks-container"));

  state.querySelector(".tasks").insertAdjacentHTML("afterbegin", newTaskHtml);

  togleNewTask();
}
