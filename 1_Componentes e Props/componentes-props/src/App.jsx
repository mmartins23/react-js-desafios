import './App.css'
import Greeting from './components/Greeting'
import HelloWorld from './components/HelloWorld'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <h2>Ex 1: Crie um componente simples</h2>
      <HelloWorld />
      <hr />
      <h2>Ex 2: Usando Props</h2>
      <Greeting name='John Doe' />
      <hr />
      <h2>Ex 3: Múltiplas props</h2>
      <Profile name='Ash Ketchum' age={15} job='student' />
      <hr />
    </>
  )
}

export default App
