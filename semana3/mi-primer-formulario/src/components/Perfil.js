import React from "react";
import Boton from './Boton';
import '../styles/Perfil.css'

function Perfil(){
    const devolver = (x) =>{
        console.log(x);
    }
    return(
        <div className='contedor-perfil'>
            <div className='perfil'>
               <label>Nombre</label>
               <input type='text' className='nombre' id='nombre' placeholder='Nombre'></input>
               <label>Apellido</label>
               <input type='text' className='apellido' id='apellido' placeholder='Apellido'></input>
               <label>Contraseña</label>
               <input type='password' className='password' id='username' placeholder='Contraseña'></input>
               
               <div className='botones'>
                   <Boton texto={"Editar"} funcionClick={() =>devolver("Registrar")}/>
               </div>
            </div>
        </div>
    );
}

export default Perfil;
