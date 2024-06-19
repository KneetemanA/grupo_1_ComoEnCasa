import { useState, useEffect } from "react";
import Cards from "./index.jsx";
const CardsMap = () => {
    const[productos,setProductos]=useState([])
    const[users,setUsers]=useState([])
    
     useEffect(() =>  {
      fetch("http://localhost:3030/api/list/products")
        .then((res) => res.json())
        .then((data) => setProductos(data.data));
    }, []);

    useEffect(() =>  {
        fetch("http://localhost:3030/api/list/users")
          .then((res) => res.json())
          .then((data) => setUsers(data.data));
      }, []);
   
    return (
        <>
        <Cards title={"Productos"} number={productos.length} icon={"pizza-slice"}/>
        <Cards title={"Categorias"} number={10} icon={"layer-group"}/>
        <Cards title={"Usuarios"} number={users.length} icon={"users"}/>
        </>
    )
}

export default CardsMap;