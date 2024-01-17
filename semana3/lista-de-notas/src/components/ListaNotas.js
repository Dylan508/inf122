import React from "react";
import NotaBasic from "./NotaBasic";

function ListaNotas(){
    const [notas,setNotas]=useState([])
    addNota =() => {
        console.log("Agregar nota");
    };

    const onDelete = () => {
        console.log("eliminar")
    }

    const onEdit = () => {
        console.log("editar")
    }
    
    return(
       
        <div className="contenedor-principal">
            <input className="input"
            type="text"
            value=""/>
            <button className='boton' onClick={addNota}> </button>
            <p>{nota}</p>
            <div>
                <button onClick={onEdit}>Editar</button>
                <button onClick={onDelete}>Eliminar</button>
            </div>
        </div>
    )
}
export default ListaNotas;