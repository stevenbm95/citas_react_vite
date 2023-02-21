import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id );
    setPacientes(pacientesActualizados);
  }

  useEffect(()=>{

    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      pacientesLS?.length > 0 && setPacientes(pacientesLS)
      
    }

    obtenerLS();
  },[]);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes) )
    
  }, [pacientes])
  

  return (
    <div className='container mx-auto mt-4'>
      <Header 
        numeros={1}
      />
      <div className='mt-12 md:flex'>
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
           />
        <ListadoPacientes 
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
      </div>
    </div>
  )
}

export default App
