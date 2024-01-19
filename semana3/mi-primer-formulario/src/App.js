import './App.css';
//import Boton from './components/Boton';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registro from './components/Registro';
import Perfil from './components/Perfil';

import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route path='/' exact Component={Login}/>
            <Route path='/login' Component={Login}/>
            <Route path='/registro' Component={Registro}/>
            <Route path='/perfil' Component={Perfil}/>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
  }
  
export default App;
