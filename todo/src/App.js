import React from 'react';
import './App.css';

function Todo({ todo }) {
    return (
      <div className="todo">
        {todo.text}
      </div>
    );
  };

  function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

function App() {
  const [todos, setTodos] = React.useState([
    { text: "Look for recording company" },
    { text: "Go to the bank" },
    { text: "Name for the album" },
    { text: "Pay the company" },
    { text: "Publish the album" },
    { text: "Write an article in a newspapar" }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;