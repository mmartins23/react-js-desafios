import './App.css'
import Toggle from './components/Toggle'
import ToggleMultiple from './components/ToggleMultiple'

function App() {
  return (
    <>
      <h1>Estado e ciclo de vida</h1>
      <hr />
      <h2>Ex:7 Usando estado</h2>
      <Toggle />
      <hr/>
      <h2>Ex:8 Multiplos estados </h2>
      <ToggleMultiple/>
      <hr/>
    </>
  )
}

export default App