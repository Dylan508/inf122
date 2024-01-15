import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
//import { useState } from 'react';

function App() {
  //const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    
    console.log("click")
  }
  const reiniciar = () => {
    console.log("reiniciar")
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={0} />
        <div className='contendedor-botones'>
          <Boton texto="Click" esBotonClick={true}
            funcionClick={click} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        </div>
      </div>
    </div>
  );
}

export default App;