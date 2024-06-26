import './App.css';
import Button from './components/Button';
import HelloWorld from './components/HelloWorld';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <h2>Ex 19: HelloWorld com estilos</h2>
      <HelloWorld />
      <hr />
      <h2>Ex 20: Estilo com CSS externo</h2>
      <Button />
      <hr/>
      <h2>Ex 21: Tema light e dark</h2>
      <ThemeToggle/>
    </div>
  );
}

export default App;
