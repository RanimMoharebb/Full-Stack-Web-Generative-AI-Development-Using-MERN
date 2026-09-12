let tasks = [];

function init() {
  fillDateSelectors();
  log("App initialised");
  loadTasks();
  log("Database initialised");
}

function fillDateSelectors() {
  let day = document.getElementById("day");
  let month = document.getElementById("month");
  let year = document.getElementById("year");

  for (let i = 1; i <= 31; i++) {
    day.innerHTML += `<option>${i}</option>`;
  }

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  months.forEach(m => {
    month.innerHTML += `<option>${m}</option>`;
  });

  for (let y = 2024; y <= 2030; y++) {
    year.innerHTML += `<option>${y}</option>`;
  }
}

function addTask() {
  let title = document.getElementById("title").value;
  let hours = document.getElementById("hours").value;
  let minutes = document.getElementById("minutes").value;
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  if (!title) {
    alert("Enter task title");
    return;
  }

  let task = {
    title,
    hours,
    minutes,
    date: `${day} ${month} ${year}`
  };

  tasks.push(task);
  saveTasks();
  renderTasks();

  log("Task added");
}

function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((t, i) => {
    list.innerHTML += `<li>${t.title} - ${t.date} (${t.hours}:${t.minutes})</li>`;
  });

  log("Entries all displayed");
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let data = localStorage.getItem("tasks");
  if (data) {
    tasks = JSON.parse(data);
    renderTasks();
  }
}

function log(msg) {
  let logs = document.getElementById("logs");
  logs.innerHTML += `<li>${msg}</li>`;
}

init();