import './App.css';
import HelloUser from './components/HelloUser';
import HelloWorld from './components/HelloWorld';
import Profile from './components/Profile';
import Family from './components/Family';
import Counter from './components/Counter';

function App() {

  const members = [{
    name: "Ash",
    age: 21,
    job: 'Developer'
  },
  {
    name: "Bob",
    age: 22,
    job: 'Tester'
  },
  {
    name: "Charlie",
    age: 23,
    job: 'Student'
  },
]
  return (
    <div className="App">
      <h1>Section 1: Componentes e Props</h1>
      <h2>1- Criando um componente</h2>
      <HelloWorld/>
      <h2>2- Utilizando Props</h2>
      <HelloUser name={'John'}/>
      <h2>3- Multiplas Props</h2>
      <Profile name='John' age={20} job='Designer'/>
      <h2>4- Composição de Componentes</h2>
      <Family members={members}/>
      <h2>5- Component com estado</h2>
      <Counter/>
    </div>
  );
}

export default App;
