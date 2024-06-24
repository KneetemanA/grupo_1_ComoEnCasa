import  { useState, useEffect } from "react";
import axios from "axios";
import FormCreate from "./children/FormCreate";
import Swal from "sweetalert2";

function CreateProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3030/api/list/products");
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addProduct = async (productData) => {
    try {
      const formData = new FormData();
      for (const key in productData) {
        if (key === "image") {
          formData.append(key, productData[key][0]);
        } else {
          formData.append(key, productData[key]);
        }
      }

      const response = await axios.post("http://localhost:3030/api/admin/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setProducts([response.data, ...products]);

      Swal.fire({
        icon: 'success',
        title: 'Producto agregado', 
        text: 'El producto se ha creado correctamente',
        timer: 1500
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);

     
    } catch (error) {
      console.error('Error al crear el producto:', error);
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Error al crear el producto",

});
    }
  };
//Esta función se pasa como prop a FormCreate:
  const handleFormSubmit = (data) => {
    console.log("Datos del formulario:", data);
    if (data.image && data.image.length > 0) {
      console.log("Archivo de imagen:", data.image[0]);
    }
    addProduct(data);
  };

  return (
    <FormCreate onSubmit={handleFormSubmit} />
  );
}

export default CreateProduct;
