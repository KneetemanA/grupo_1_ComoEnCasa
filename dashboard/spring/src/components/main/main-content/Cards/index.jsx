import React from "react";

const Cards = ({title, number, icon}) => {
    return (
          <div className="d-flex gap-3  align-items-center text-center p-3 px-5 coineinerCard">
          <div className="iconCards ">
            <i className={`fas fa-${icon} fa-2x text-white`}></i>
          </div>
          <div className="">
            <h4>{title}</h4>
            <span className="fs-5 fw-bold">{number}</span>
          </div>
          </div>
             ); 
  };
  
  export default Cards;