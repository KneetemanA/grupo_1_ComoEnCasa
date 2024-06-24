import { useState, useEffect } from "react";
import Cards from "./Cards.jsx";
import CardLastDate from "../CardsLastDate/CardLastDate.jsx";

const CardsMap = () => {
  const [productos, setProductos] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [lastProduct, setLastProduct] = useState({});
  const[lastUser, setLastUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3030/api/list/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.data);
        setLastProduct(data.data[data.data.length - 1]);
        
      });
  }, []);
  console.log(lastUser)

  useEffect(() => {
    fetch("http://localhost:3030/api/list/users")
      .then((res) => res.json())
      .then((data) => {setUsers(data.data);
        setLastUser(data.data[data.data.length - 1]);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/api/list/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data));
  }, []);

  return (
    <>
    <div className="d-flex w-100 justify-content-between">
      <Cards title={"Productos"} number={productos.length} icon={"pizza-slice"} color={"text-success"} bg={"bg-success-subtle"} />
      <Cards title={"Categorias"} number={categories.length} icon={"layer-group"} color={"text-danger"} bg={"bg-danger-subtle"} />
      <Cards title={"Usuarios"} number={users.length} icon={"users"} color={"text-primary"} bg={"bg-primary-subtle"} />
      </div>
      <CardLastDate name={lastProduct.name} price={lastProduct.price} imgpro={lastProduct.image}
                     user={lastUser.user} nameuser={lastUser.name}  imguser={lastUser.imageProfile}       />
    </>
  );
}

export default CardsMap;
