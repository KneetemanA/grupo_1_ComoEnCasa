import  { useState, useEffect } from "react";
import axios from "axios";
import FormCreate from "./children/FormCreate";

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
      alert('Producto creado con éxito');
    } catch (error) {
      console.error('Error al crear el producto:', error);
      alert('Hubo un error al crear el producto');
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
