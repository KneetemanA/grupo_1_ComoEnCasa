import { useEffect, useState } from 'react';
import { useParams,} from 'react-router-dom';
import FormUpdate from './children/FormUpdate';

function UpdateProduct2() {

  const { id } = useParams();
  const [producto, setProducto] = useState();

  function getProduct() {
    fetch(`http://localhost:3030/api/product/${id}`)
      .then((res) => res.json())
      .then(data => {
        setProducto(data.producto);
      })
      .catch(error => {
         console.error('Error al actualizar el producto:', error);
      });;

  };

  useEffect(getProduct, [id])

  async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData.entries());
  
    if (!product.title || !product.price || !product.image || !product.discount || !product.detail || !product.free_Shipping || !product.category_id) {
      alert("Rellene todos los campos");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3030/api/product/${id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log('Producto actualizado:', data);
      history.push('/products'); // Redirige a la lista de productos o a la página que prefieras
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    };
  }

  return (
    <FormUpdate onSubmit={handleFormSubmit} id={id} producto={producto}/>
  );
}

export default UpdateProduct2