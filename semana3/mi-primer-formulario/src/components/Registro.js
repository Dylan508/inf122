import React from "react";
import Boton from './Boton';
import '../styles/Registro.css'

function Registro(){
    const devolver = (x) =>{
        console.log(x);
    }
    return(
        <div className='contedor-registro'>
            <div className='registro'>
               <label>Nombre</label>
               <input type='text' className='nombre' id='nombre' placeholder='Nombre'></input>
               <label>Apellido</label>
               <input type='text' className='apellido' id='apellido' placeholder='Apellido'></input>
               <label>Contraseña</label>
               <input type='text' className='password' id='username' placeholder='Contraseña'></input>
               
               <div className='botones'>
                   <Boton texto={"Registrar"} funcionClick={() =>devolver("Registrar")}/>
               </div>
            </div>
        </div>
    );

}
export default Registro;