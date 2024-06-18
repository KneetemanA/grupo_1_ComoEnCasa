import imgperfil from "../../assets/images/fa.png";
import logopeque from "../../assets/images/F.png";
import LinksSideBar from "./LinksSideBar";
import {Link} from "react-router-dom";

function SideBar() {
  return (
    <div className=" col-auto col-md-2 min-vh-100 container-sidebar" style={{ backgroundColor: "#131732" }}>
      <div className="container-items-sidebar">
        <div className="header-sidebar">
         <Link to="/"> 
          <figure className="logo-sidebar">
            <img src={logopeque} alt="Logo" />
          </figure>
          </Link>
        </div>
        <div className="container-main-sidebar">
        <ul>
          <LinksSideBar name="Home" to="/" icon="bi bi-house-fill" />
          <LinksSideBar
            name="Products"
            to="/products"
            icon="bi bi-grid-fill"
          />
          <LinksSideBar name="Orders" to="/orders" icon="bi bi-table" />
          <LinksSideBar name="Users" to="/users" icon="bi bi-people-fill" />
        </ul>
        </div>
      </div>
      <div className="dropdown open">
        <a
          className="text-white text-decoration-none dropdown-toggle py-3 ms-2 "
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
          src={imgperfil}
          alt="Profile"
          className="rounded-circle"
          width="42"
          height="42"
        />
          <span className="ms-2 d-none d-sm-inline">Admin</span>
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><Link className="dropdown-item" to="/settings">Setting</Link></li>
            <li><Link className="dropdown-item" to="/logout">Cerrar Sesion</Link></li>
          </ul>
      </div>
    </div>
  );
}

export default SideBar;
