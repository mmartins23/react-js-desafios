import './App.css'
import Family from './components/Family'
import Greeting from './components/Greeting'
import HelloWorld from './components/HelloWorld'
import Profile from './components/Profile'

function App() {
  const members = [
    { name: 'Ana', age: 18, job: 'marketing' },
    { name: 'Bob', age: 23, job: 'development' },
    { name: 'Ana', age: 38, job: 'sales' }
  ]
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
      <h2>Ex 4: Composição de Componentes</h2>
      <Family members={members} />
    </>
  )
}

export default App
