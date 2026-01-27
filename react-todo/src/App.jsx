// import { useState } from 'react';
// import TodoItem from './components/TodoItem';
//
// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');
//
//   const addTodo = (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;
//
//     setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
//     setInput('');
//   };
//
//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };
//
//
//   return (
//     <div className="container">
//       <h1>React Todo</h1>
//       <p className="subtitle">react-scan shows green highlights on re-rendered components only!</p>
//
//       <form onSubmit={addTodo}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Add a todo..."
//         />
//         <button type="submit">Add</button>
//       </form>
//
//       <ul>
//         {todos.map((todo) => (
//           <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
//         ))}
//       </ul>
//
//       <p className="hint">Toggle a todo - only that item highlights green!</p>
//     </div>
//   );
// }
//
// export default App;

import React from 'react'
import MyComponent from "./MyComponent.jsx";

const App = () => {
    return (
        <MyComponent />
    )
}
export default App
