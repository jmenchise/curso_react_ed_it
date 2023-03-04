import { useState, useEffect } from 'react';
import './App.css';
import { loginData, loginDataInputs, registerData, registerDataInputs } from './components/Form/config';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';


function App() {

  const [showForms, setShowforms] = useState(false)
  const [showLogin, setShowlogin] = useState(false)
  const navbarItemNames = ['Home', 'Link', 'Disabled'];

  const handleSubmit = (e,data) => {
    e.preventDefault();
    console.log(data);
  }


  const [enviado, setEnviado] = useState(false)
  const [text, setText] = useState('')

  
  const toggleEnviado = () => {
    setEnviado(!enviado);
    console.log('enviado:', enviado);
  }

  const handleText = text => setText(text)

  
  useEffect(() => {
    if (enviado) {
      alert('Se Envió el formulario con éxito!')
    }
  }, [enviado])


  return (
    <div className="App text-danger">
      <h1>{ text || 'Acá va un texto que será tipeado desde Form'}</h1>
      <Navbar
        navbarItemNames={navbarItemNames}
        searchBar={true}
      />
      <button className='btn-style'onClick={ () => setShowforms(!showForms) }>
        { showForms ? 'Ocultar Formulario' : 'Mostrar Formulario' }
      </button>
      {showForms && 
        <>
          <Form
            formTitle={!showLogin ? 'Register' : 'Login'}
            initialState={!showLogin ? registerData : loginData}
            inputs={!showLogin ? registerDataInputs : loginDataInputs}
            onSubmit={handleSubmit}
            showLogin={showLogin}
            toggleEnviado={toggleEnviado}
            handleText={handleText}
          />
          <button className='btn-style' onClick={() => setShowlogin(!showLogin)}>
            {!showLogin ? 'Ir a Login' : 'Ir a Registro'}
          </button>
        </>
      }
    </div>
  );
}

export default App;
