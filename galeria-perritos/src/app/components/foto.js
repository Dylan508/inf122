"use client"

import Image from "next/image";
import style from "./foto.module.css";
import { useEffect, useState } from "react";

function Foto(){
    const [perrito,setPerrito]=useState("/vercel.svg");
    const [estado,setEstado]=useState("Esperando");
    const [habilidad,setHabilidad]=useState("Esperando");
    const [movimiento,setMovimiento]=useState("Esperando");
    const url="https://pokeapi.co/api/v2/pokemon/ursaluna";
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data=>{
            
            setPerrito(data.sprites.front_default),
            setEstado(data.species.name)
            setHabilidad(data.abilities[1].ability.name)
            
        });
    },[])
    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            
            <Image src={perrito}height={300} width={300}/>
            <h1>{habilidad}</h1>
            <h1>{movimiento}</h1>

        </div>
    );
        
}
export default Foto;