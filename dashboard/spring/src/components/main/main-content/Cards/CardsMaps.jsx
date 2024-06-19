import { useState, useEffect } from "react";
import Cards from "./index.jsx";
const CardsMap = () => {
    const[productos,setProductos]=useState([])
    
     useEffect(() =>  {
      fetch("http://localhost:3030/api/list/products")
        .then((res) => res.json())
        .then((data) => setProductos(data.data));
    }, []);
    console.log(productos)
    return (
        <>
        <Cards title={"Productos"} number={productos.length} icon={"pizza-slice"}/>
        <Cards title={"Categorias"} number={productos.length} icon={"layer-group"}/>
        <Cards title={"Usuarios"} number={productos.length} icon={"users"}/>
        </>
    )
}

export default CardsMap;