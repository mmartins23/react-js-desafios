import './App.css'
import Greeting from './components/Greeting'
import HelloWorld from './components/HelloWorld'

function App() {

  return (
    <>
      <h2>Ex 1: Crie um componente simples</h2>
      <HelloWorld />
      <hr />
      <h2>Ex 2: Usando Props</h2>
      <Greeting name='John Doe' />
      <hr />
    </>
  )
}

export default App
