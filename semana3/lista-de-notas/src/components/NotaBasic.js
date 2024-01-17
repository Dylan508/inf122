import React from "react";
function NotaBasic(){
    return(
        <div>
            <p>{nota}</p>
            <div>
                <button onClick={onEdit}>Editar</button>
                <button onClick={onDelete}>Eliminar</button>
            </div>
        </div>
    )
}

export default NotaBasic;