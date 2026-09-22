import {useState} from 'react';
import Formulario from './components/Formulario.jsx'
import './css/main.css';

function App() {
  const [modalVisible, setModalVisible]=useState(false);
  // const [initialState, setState]=useState("Hola Mundo");
  // modalVisible - false al dar clic sea true
  // const [modalVisible, setmodalVisible] = useState(false);
  return (
    <main className="container">
      <h1 className='titulo'>
        Administrador de Citas <span className='titulo-bold'>Veterinario</span>
      </h1>
      <button
        className='btn-nueva-cita'
        onClick={() => setModalVisible(true)}
          //console.log(initialState)
          //setState('Hola Richard')
          //console.log(initialState)
          //console.log(modalVisible)
          //setModal(true)
          //console.log(modalVisible)
      >
        <span className='btn-texto-nueva-cita'>Nueva Cita</span>
      </button>
      {modalVisible && (
        <div className='modal-overlay' role='dialog' aria-modal="true">
          <div className='modal-content'>
            <Formulario />
        </div>
      </div>
      )}
    </main>
  )
}

export default App
