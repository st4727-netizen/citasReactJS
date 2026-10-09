import '../css/paciente.css';

const Paciente = ({
    setModalVisible,
    pacientes,
    paciente
}) => {

    const handleEditar = () => {
        // abrir el modal cuando de de clic
        setModalVisible(true); // parametros, los parametros son las partes necesarias para que una funcion pueda actuar, es una etiqueta que espera recibir un valor (funcion) que va a modificar un estado
        // en console.log mostrar el array de pacientes
        console.log(pacientes); //es una etiqueta que espera recibir un estado
    }

    return (
        <article className="paciente-card">
            <p className="paciente-label">Paciente:
                <span className="paciente-nombre"> {paciente.paciente}</span>
            </p>
            <p className="paciente-fecha">{paciente.fechaAlta}</p>

            <div className="paciente-contenedor-botones">
                <button
                    type="buton"
                    className="paciente-btn paciente-btn-editar"
                    onClick={() => handleEditar} //manda a llamar la funcion handle (abrir modal al dar click y console.log)
                >Editar</button>
                <button 
                    type="buton"
                    className="paciente-btn paciente-btn-eliminar"
                >Eliminar</button>
            </div>
        </article>
    );
};

export default Paciente;

        