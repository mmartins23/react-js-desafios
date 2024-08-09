import './App.css'
import DynamicForm from './components/DynamicForm'
import FileUploader from './components/FileUploader'
import MultiPartForm from './components/MultiPartForm'
import RegistrationForm from './components/RegistrationForm'
import ValidationForm from './components/ValidationForm'

function App() {

  return (
    <>
      <h2>Ex: 14 Form Registration</h2>
      <RegistrationForm />
      <hr />
      <h2>Ex: 15 Dynamic Form</h2>
      <DynamicForm />
      <hr/>
      <h2>Ex: 16 Validation Form</h2>
      <ValidationForm/>
      <hr/>
      <h2>Ex: 17 File Uploader</h2>
      <FileUploader/>
      <hr/>
      <h2>Ex: 18 MultiPart Form</h2>
      <MultiPartForm/>
      <hr/>
    </>
  )
}

export default App
