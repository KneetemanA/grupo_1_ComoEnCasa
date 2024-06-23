import PropTypes from "prop-types";

const Cards = ({ title, number, icon,color,bg }) => {
  return (
    <div className="d-flex align-items-start  justify-content-between text-white pt-3 px-4 coineinerCard">
      <ul className="list-unstyled ">
        <li className="fs-6 text-secondary fw-bold">{title}</li>
        <li className="fs-4 fw-bold">{number}</li>
        <li className="fs-6 text-secondary fw-semibold "   >Total Registrados</li>
      </ul>
      <div className={` color-icon ${bg} ` }>
        <i className={`fas fa-${icon} fs-3 ${color}`}></i>
      </div>
    </div>
  );
};
Cards.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  icon: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string
 
};

export default Cards;
