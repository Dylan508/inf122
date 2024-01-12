import React from "react";
import "../styles/Evento.css";
function Evento(){
    return(
        <div className="card-container">
            <img className="card-image"
                src={require("../images/imagen1.jpg")}
                alt="Foto del evento" />


            <div className="card-content">
                <h2 className="card-title">Py Pizza 03 - PyPuzzle</h2>
                <p className="card-date">09 de Diciembre de 2023 - 13:30 GMT-4</p>
                <p className="card-place">Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia</p>
                <p className="card-description">¡Hola Pythonista!
                Participa en este Evento Presencial de la comunidad Python La Paz
                ¿Cuánto conoces de Python?
                Aprende a trabajar en equipo resolviendo increíbles acertijo
                ¡Anímate a ser parte de esta actividad!</p>
                <div className="card-icons">
                    <img className="card-icon" src={require("../images/ant-design_alert-filled.svg")} alt="i" />
                    <figure><img className="card-icon" src={require("../images/youtube.svg")} alt="i" /></figure>
                </div>
                
                
            </div>
        </div>
    );
}

export default Evento;