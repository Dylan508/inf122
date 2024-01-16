import React from "react";
import TableroD from './TableroD';
import { useState } from 'react';

function Juego(){
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("X");
    const cuadrosTemp = [...cuadros];

    const click = (i) => {


        if(cuadrosTemp[i]==null){
            cuadrosTemp[i] = jugador;
            console.log("array", cuadrosTemp);
            setCuadros(cuadrosTemp);
            setJugador(jugador === "X" ? "O":"X");
        }
    }

    return <TableroD cuadros={cuadros} />
}