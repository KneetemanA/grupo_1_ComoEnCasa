import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LinksSideBar({ name, to, icon }) {
  return (
    <li>
      <Link to={to} className="nav-link px-0 align-middle text-white">
      <i className={`${icon} ps-2`}></i> <span className="ms-1 d-none d-sm-inline">{name}</span>
      </Link>
    </li>
  );
}

LinksSideBar.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default LinksSideBar;