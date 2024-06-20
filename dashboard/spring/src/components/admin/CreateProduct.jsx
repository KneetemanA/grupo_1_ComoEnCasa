import React, { useEffect, useState } from 'react';
import FormularioProduct from './children/formularioProduct';

function CreateProduct() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/list/products")
      .then((res) => res.json())
      .then((data) => setProductos(data.data));
  }, []);

  const handleOnSubmit = (producto) => {
    fetch('http://localhost:3030/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    })
    .then(response => response.json())
    .then(data => {
      setProductos([data, ...productos]);
      console.log('Producto creado:', data);
    })
    .catch(error => {
      console.error('Error al crear el producto:', error);
    });
  };

  return (
    <React.Fragment>
      <FormularioProduct handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
}

export default CreateProduct;

