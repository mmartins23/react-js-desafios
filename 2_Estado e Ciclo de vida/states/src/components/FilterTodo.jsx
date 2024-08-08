import { useState } from "react";

const FilterTodo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    const [filter, setFilter] = useState("");

    const addTodo = () => {
        setTodos([...todos, { id: Math.random(), task: task }]);
        setTask("");
    }
    return (
        <div>
            <input
                type="text"
                onChange={(e) => setTask(e.target.value)} />
            <input
                type="text"
                onChange={(e) => setFilter(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos
                    .filter(todo => todo.task.includes(filter))
                    .map(todo => (
                        <li key={todo.id}>{todo.task}</li>
                    ))}
            </ul>
        </div>
    )
}

export default FilterTodo