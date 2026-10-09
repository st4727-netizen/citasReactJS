import {useState} from 'react';
import Formulario from './components/Formulario.jsx';
import './css/main.css';
import Paciente from './components/paciente.jsx';

function App() {
  const [modalVisible, setModalVisible]=useState(false); //variable donde se guarda el valor del estado y la segunda modofica el valor
  const [pacientes, setPacientes] = useState([]);
  // para pasar estados de un componente padre a un componente hijo
  // se hace a traves de props
  return (
    <main className="container">
      <h1 className='titulo'>
        Administrador de Citas <span className='titulo-bold'>Veterinario</span>
      </h1>
      <button
        className='btn-nueva-cita'
        onClick={() => setModalVisible(true)}
      >
        <span className='btn-texto-nueva-cita'>Nueva Cita</span>
      </button>

      {pacientes.map((paciente) => (
        console.log(paciente),
         <Paciente 
          setModalVisible={setModalVisible} //argumentos, son como la "energia" o motor para que el programa haga lo que nosotros hizimos
          pacientes={pacientes} //argumentos
          paciente={paciente}
          key={paciente.id}
      />
      ))}

      {modalVisible && (
        <div className='modal-overlay' role='dialog' aria-modal="true">
          <div className='modal-content'>
            <Formulario
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            pacientes={pacientes}
            setPacientes={setPacientes}

            />
        </div>
      </div>
      )} 
      
    </main>
  )
}

export default App
