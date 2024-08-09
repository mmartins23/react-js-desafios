import './App.css'
import Clock from './components/Clock'
import FilterTodo from './components/FilterTodo'
import TodoList from './components/TodoList'
import Toggle from './components/Toggle'
import ToggleMultiple from './components/ToggleMultiple'
import WindowWidthChecker from './components/WindowWidthChecker'

function App() {
  return (
    <>
      <h1>Estado e ciclo de vida</h1>
      <hr />
      <h2>Ex:7 Usando estado</h2>
      <Toggle />
      <hr />
      <h2>Ex:8 Multiplos estados </h2>
      <ToggleMultiple />
      <hr />
      <h2>Ex:9 Clock</h2>
      <Clock />
      <hr />
      <h2>Ex: 10 Todo List</h2>
      <TodoList/>
      <hr/>
      <h2>Ex: 11 Filter Todo List</h2>
      <FilterTodo/>
      <hr/>
      <h2>Ex: 12 Window Checker</h2>
      <WindowWidthChecker/>
      <hr/>
    </>
  )
}

export default App
