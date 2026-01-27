// ============================================
// STATE
// ============================================
let todos = [];
let nextId = 1;
let useTargetedUpdates = false;

// ============================================
// DOM REFERENCES
// ============================================
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const modeToggle = document.getElementById("mode-toggle");
const modeLabel = document.getElementById("mode-label");

// ============================================
// DOM ELEMENT FACTORY
// ============================================
function createTodoElement(todo) {
  const li = document.createElement("li");
  li.dataset.id = todo.id;

  if (todo.completed) {
    li.classList.add("completed");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => handleToggle(todo.id));

  const span = document.createElement("span");
  span.textContent = todo.text;

  li.appendChild(checkbox);
  li.appendChild(span);

  return li;
}

// ============================================
// APPROACH 1: FULL RE-RENDER
// Simple to write, but rebuilds entire DOM
// ============================================
function destroyAllElements() {
  list.innerHTML = "";
}

function rebuildAllElements() {
  todos.forEach((todo) => {
    const element = createTodoElement(todo);
    list.appendChild(element);
  });
}

function fullRerender() {
  destroyAllElements();
  rebuildAllElements();
}

// ============================================
// APPROACH 2: TARGETED UPDATES
// Efficient, but requires manual DOM tracking
// ============================================
function findElementById(id) {
  return list.querySelector(`[data-id="${id}"]`);
}

function findTodoById(id) {
  return todos.find((todo) => todo.id === id);
}

function appendSingleElement(todo) {
  const element = createTodoElement(todo);
  list.appendChild(element);
}

function updateSingleElement(id) {
  const element = findElementById(id);
  if (!element) return;

  const todo = findTodoById(id);
  if (!todo) return;

  // Manually sync each property
  element.className = todo.completed ? "completed" : "";
  element.querySelector("input").checked = todo.completed;
}

// ============================================
// STATE MUTATIONS
// ============================================
function addTodoToState(text) {
  const todo = {
    id: nextId++,
    text: text,
    completed: false,
  };
  todos.push(todo);
  return todo;
}

function toggleTodoInState(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}

// ============================================
// EVENT HANDLERS
// ============================================
function handleAdd(text) {
  const todo = addTodoToState(text);

  if (useTargetedUpdates) {
    appendSingleElement(todo);
  } else {
    fullRerender();
  }
}

function handleToggle(id) {
  toggleTodoInState(id);

  if (useTargetedUpdates) {
    updateSingleElement(id);
  } else {
    fullRerender();
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const text = input.value.trim();

  if (text) {
    handleAdd(text);
    input.value = "";
  }
}

function handleModeChange() {
  useTargetedUpdates = modeToggle.checked;
  updateModeLabel();
  fullRerender();
}

// ============================================
// UI UPDATES
// ============================================
function updateModeLabel() {
  if (useTargetedUpdates) {
    modeLabel.textContent = "Targeted Updates (complex code, efficient)";
  } else {
    modeLabel.textContent = "Full Re-render (simple code, inefficient)";
  }
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
  form.addEventListener("submit", handleFormSubmit);
  modeToggle.addEventListener("change", handleModeChange);
  updateModeLabel();
}

init();
