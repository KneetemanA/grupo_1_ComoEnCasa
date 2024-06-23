import { useState, useEffect } from "react";
import Cards from "./Cards.jsx";
const CardsMap = () => {
    const[productos,setProductos]=useState([])
    const[users,setUsers]=useState([])
    const[categories,setCategories]=useState([])
    
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

      useEffect(() =>  {
        fetch("http://localhost:3030/api/list/categories")
          .then((res) => res.json())
          .then((data) => setCategories(data.data));
      }, []);
   
    return (
        <>
        <Cards title={"Productos"} number={productos.length} icon={"pizza-slice"} color={"text-success"} bg={"bg-success-subtle"} />
        <Cards title={"Categorias"} number={categories.length} icon={"layer-group"} color={"text-danger"} bg={"bg-danger-subtle"}/>
        <Cards title={"Usuarios"} number={users.length} icon={"users"} color={"text-primary"} bg={"bg-primary-subtle"}/>
        </>
    )
}

export default CardsMap;