import { BsXSquareFill } from "react-icons/bs";
import "./CreateCustomer.css";

const VistaEmer = ({ estado, cambiarEstado }) => {
  return (
    <>
      {estado && (
        <div className="overLay">
          <div className="popup">
            <a className="btn_cerrar_popup" href="#">
              <i className="material_Icons" onClick={()=> cambiarEstado(false)}>{<BsXSquareFill />}</i>
            </a>
            <h2>Create Customer </h2>
            <form>
              <div className="contenedor-inputs">
                <input type="text" placeholder="Name" value={""} />
                <input type="text" placeholder="Lastname" value={""} />
                <input type="text" placeholder="Age" value={""} />
                <input type="text" placeholder="Phone number" value={""} />
                <input type="text" placeholder="Email" value={""} />
                <input type="text" placeholder="Password" value={""} />
                <input type="text" placeholder="City" value={""} />
              </div>
              <input type="submit" className="btn_submit" value="Crear" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default VistaEmer;
