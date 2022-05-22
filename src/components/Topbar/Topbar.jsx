import "./topbar.css";
import {useState} from 'react';
import VistaEmer from "../Emergente/CreateCustomer";

const Topbar = () => {
  const [estadoVista, setEstadoVista ] = useState(false);
  return (
    <>
      <header>
        <img className="logo" alt="logo" />
        <nav className="nav__links">
          <ul>
            <li>
              <button onClick={()=> setEstadoVista(!estadoVista)}>Crear</button>
            </li>
            <li>
              <button>Update</button>
            </li>
            <li>
              <button>Delete</button>
            </li>
          </ul>
        </nav>
      </header>
      <VistaEmer estado={estadoVista} cambiarEstado={setEstadoVista}/>
    </>
  );
};

export default Topbar;
