import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    setTodos([...todos, { id: Math.random(), task: task }]);
    setTask("");
  };

  const [filter, setFilter] = useState("");

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add List</button>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Procura a sua tarefa"
      />
      <ul>
        {todos
          .filter((todo) => todo.task.includes(filter))
          .map((todo) => (
            <li key={todo.id}>{todo.task}</li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
