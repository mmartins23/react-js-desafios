import './App.css';
import Toggle from './components/Toggle';
import ToggleMultiple from './components/ToggleMultiple';
import Clock from './components/Clock';
import TodoList from './components/TodoList';
import WindowWitdhChecker from './components/WindowWitdhChecker';
import DataFetcher from './components/DataFetcher';


function App() {

  return (
    <div className="App">
      <h1>Section 2:Estado e ciclo de vida</h1>
      <h2>1- Usando o estado</h2>
      <Toggle />
      <h2>2- Toggle Multiplo</h2>
      <ToggleMultiple/>
      <h2>3- Relogio em tempo real</h2>
      <Clock/>
      <h2>4- Todo List e Filter</h2>
      <TodoList/>
      <h2>6- Verificador de largura de tela</h2>
      <WindowWitdhChecker/>
      <h2>7- Simulação de busca de dados</h2>
      <DataFetcher/>
    </div>
  );
}

export default App;
