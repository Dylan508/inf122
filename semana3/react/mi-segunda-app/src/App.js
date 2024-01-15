import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';
//useState es para llamar a los hoods
function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const clickmenos3 = () => {
    setNumClicks(nroClicks - 3);
    console.log("click")
  }
  const clickmas3 = () => {
    setNumClicks(nroClicks + 3);
    console.log("click")
  }
  const clickmenos1 = () => {
    setNumClicks(nroClicks - 1);
    console.log("click")
  }
  const clickmas1 = () => {
    setNumClicks(nroClicks + 1);
    console.log("click")
  }

  const reiniciar = () => {
    setNumClicks(0);
    console.log("reiniciar")
  }
  const[show, setshow] = useState(true);
  const mostrar = ()=>{
    setShow(!show);
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        
        <div className='contendedor-botones'>
          <div className='contenedor-botones-numeros'> 
            <Boton texto="-3" esBotonClick={true}
              funcionClick={clickmenos3} />
            <Boton texto="+3" esBotonClick={true}
              funcionClick={clickmas3} />
            <Boton texto="-1" esBotonClick={true}
              funcionClick={clickmenos1} />
            <Boton texto="+1" esBotonClick={true}
              funcionClick={clickmas1} />
          </div>
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
          <Boton texto="desaparecer " esBotonClick={false}
            funcionClick={reiniciar} />
        </div>
      </div>
      
    </div>

    
    
    
  );
}

export default App;