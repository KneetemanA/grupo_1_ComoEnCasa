import React from "react";
import Styles from "./styles.module.css"

const Cards = () => {
    return (
            <div className={Styles.divAbueloCards}>
                <div className={Styles.divPadreCards}>
                <div className={Styles.iconCards}>
                        <i className={`fas fa-pizza-slice fa-2x text-gray-300`}></i>
                    </div>
                    <div className={Styles.divHijoUnoCards}>
                        <h1 className={Styles.tituloCards}>Productos</h1>
                        <h2 className={Styles.numeroCards}>15</h2>
                    </div>
                </div>
            </div>
             ); 
  };
  
  export default Cards;