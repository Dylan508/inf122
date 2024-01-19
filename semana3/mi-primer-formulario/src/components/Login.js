import React from "react";
import Boton from './Boton';
import '../styles/Login.css'

function Login(){
    const devolver = (x) =>{
        console.log(x);
    }

    return(
        <div className='contedor-login'>
            <div className='login'>
               <label>UserName</label>
               <input type='text' className='username' id='username' placeholder='Usuario'></input>
               <label>Constraseña</label>
               <input type='text' className='password' id='username' placeholder='Contraseña'></input>
               <div className='botones'>
                   <Boton texto={"Registrar"} funcionClick={() =>devolver("Registrar")}/>
                   <Boton texto={"Iniciar"} funcionClick={() =>devolver("Iniciar")}/>
               </div>
            </div>
        </div>
    );   
}
export default Login;
