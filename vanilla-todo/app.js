// State
let todos = [];
let nextId = 1;

// DOM elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// THE PROBLEM: This re-renders the ENTIRE list every time
function render() {
  // Clear everything and rebuild from scratch
  list.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => toggleTodo(todo.id));

    const span = document.createElement('span');
    span.textContent = todo.text;

    li.appendChild(checkbox);
    li.appendChild(span);
    list.appendChild(li);
  });
}

// Add todo
function addTodo(text) {
  todos.push({ id: nextId++, text, completed: false });
  render(); // Re-renders ALL todos
}

// Toggle todo
function toggleTodo(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  render(); // Re-renders ALL todos just to toggle one!
}

// Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    addTodo(input.value.trim());
    input.value = '';
  }
});
