import { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import './App.css'
import Navbar from './components/Navbar/Navbar';

function App() {

  const [showForms, setShowforms] = useState(false)
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    materia: ''
  })

  const navbarItemNames = ['Home', 'Link', 'Disabled'];


  useEffect(() => {
    
    if(showForms) {

      setDatos({
        nombre: 'Joan',
        apellido: 'Menchise',
        materia: 'ReactJS'
      })
    }
  
    return () => {

      setDatos({
        nombre: '',
        apellido: '',
        materia: ''
      })
      
    }
  }, [showForms])
  

  return (
    <div className="App text-danger">
      <Navbar
        navbarItemNames={navbarItemNames}
        searchBar={true}
      />
      <button 
        className='btn-style'
        onClick={ () => setShowforms(!showForms) }>{ showForms ? 'Ocultar Formulario' : 'Mostrar Formulario' }
      </button>
      {showForms &&
        <>
          <Form/>
          <Form condicional={true}/>
        </>
      }
      {
        <>
          <h1>Nombre: {datos.nombre}</h1>
          <h1>Apellido: {datos.apellido}</h1>
          <h1>Materia: {datos.materia}</h1>
        </>
      }
    </div>
  );
}

export default App;
