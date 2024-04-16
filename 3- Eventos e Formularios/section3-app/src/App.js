import './App.css';
import FileUploader from './components/FileUploader';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <h2>1- Formulario de registro</h2>
      <RegistrationForm/>
      <h2>4- Upload de arquivo</h2>
      <FileUploader/>
    </div>
  );
}

export default App;
