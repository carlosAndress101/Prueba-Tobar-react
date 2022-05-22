import { TiUserAdd } from "react-icons/ti";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin4Fill } from "react-icons/ri";
import "./header.css";
const Header = () => {
  return (
    <div className="dataTable-container">
      <div className="header-tools">
        <div className="tools">
          <ul>
            <li>
              <span>
                <input type={"checkbox"}></input>
              </span>
            </li>
            <li>
              <button>
                <i className="material-icons">{<TiUserAdd />}</i>
              </button>
            </li>
            <li>
              <button>
                <i className="material-icons">{<GrUpdate />}</i>
              </button>
            </li>
            <li>
              <button >
                <i className="material-icons" >{<RiDeleteBin4Fill />}</i>
              </button>
            </li>
          </ul>
        </div>
        <div className="search">
          <input
            type={Text}
            name="searchName"
            id="searchId"
            className="searchInput"
          ></input>
        </div>
      </div>
      <table className="dataTable" id="tabla">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>PhoneNumber</th>
            <th>Email</th>
            <th>Password</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td className="table-checkbox">
            </td>
            <td>1</td>
            <td>carlos</td>
            <td>O'farrel</td>
            <td>20</td>
            <td>3214248201</td>
            <td>carlostheoro@gmail.com</td>
            <td>12345</td>
            <td>Acandi</td>
          </tr>
          <tr>
            <td className="table-checkbox">
            </td>
            <td>1</td>
            <td>carlos</td>
            <td>O'farrel</td>
            <td>20</td>
            <td>3214248201</td>
            <td>carlostheoro@gmail.com</td>
            <td>12345</td>
            <td>Acandi</td>
          </tr>
          <tr>
            <td className="table-checkbox">
            </td>
            <td>1</td>
            <td>carlos</td>
            <td>O'farrel</td>
            <td>20</td>
            <td>3214248201</td>
            <td>carlostheoro@gmail.com</td>
            <td>12345</td>
            <td>Acandi</td>
          </tr>
          <tr>
            <td className="table-checkbox">
            </td>
            <td>1</td>
            <td>carlos</td>
            <td>O'farrel</td>
            <td>20</td>
            <td>3214248201</td>
            <td>carlostheoro@gmail.com</td>
            <td>12345</td>
            <td>Acandi</td>
          </tr>
          <tr>
            <td className="table-checkbox">
            </td>
            <td>1</td>
            <td>carlos</td>
            <td>O'farrel</td>
            <td>20</td>
            <td>3214248201</td>
            <td>carlostheoro@gmail.com</td>
            <td>12345</td>
            <td>Acandi</td>
          </tr>
          <tr>
            <td className="table-checkbox">
            </td>
            <td>1</td>
            <td>carlos</td>
            <td>O'farrel</td>
            <td>20</td>
            <td>3214248201</td>
            <td>carlostheoro@gmail.com</td>
            <td>12345</td>
            <td>Acandi</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Header;
