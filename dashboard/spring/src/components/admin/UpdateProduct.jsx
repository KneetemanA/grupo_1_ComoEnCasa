import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'; // Asegúrate de que estás usando react-bootstrap si usas componentes de Form y Button

function UpdateProduct() {
  const [producto, setProducto] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3030/api/products/${id}`)
      .then((res) => res.json())
      .then(data => {
        setProducto(data.producto);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', producto.title);
    formData.append('price', producto.price);
    formData.append('discount', producto.discount);
    formData.append('detail', producto.detail);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    fetch(`http://localhost:3030/api/products/${id}`, {
      method: 'PUT',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log('Producto actualizado:', data);
        history.push('/products'); // Redirige a la lista de productos o a la página que prefieras
      })
      .catch(error => {
        console.error('Error al actualizar el producto:', error);
      });
  };

  return (
    <div className="col-sm-12 col-md-6 mb-2 fs-5 mx-auto">
      <Form onSubmit={handleOnSubmit} className="row mx-auto text-center p-4 form-border text-white">
        <div className="col-sm-12 col-md-6 mb-2 text-white">
          <label className="form-label" htmlFor="title">Titulo</label>
          <input className="form-control" type="text" name="title" value={producto.title} 
            placeholder="Ingrese el titulo del producto" onChange={handleInputChange} />
        </div>

        <div className="col-sm-12 col-md-6 mb-2 fs-5 text-white">
          <label className="form-label" htmlFor="price">Precio</label>
          <input className="form-control" type="number" name="price" value={producto.price}
            placeholder="Ingrese el precio del producto" onChange={handleInputChange} />
        </div>

        <div className="col-sm-12 col-md-6 mb-2 fs-5 text-white">
          <label className="form-label" htmlFor="discount">Descuento</label>
          <input className="form-control" type="number" name="discount" value={producto.discount}
            placeholder="Ingrese el descuento del producto" onChange={handleInputChange} />
        </div>

        <div className="mb-2 fs-5 text-white">
          <label htmlFor="fotoproducto" className="form-label">Foto del producto</label>
          <input className="form-control" type="file" id="fotoproducto" name="image"
            onChange={handleFileChange} />
        </div>

        <div className="mb-5 fs-5 text-white">
          <label htmlFor="detail" className='form-label'>Descripción</label>
          <textarea className="form-control" type="text" name="detail" value={producto.detail}
            placeholder="Ingrese la descripción del producto" onChange={handleInputChange} />
        </div>

        <Button type="submit" className="submit-btn text-white">
          Editar Producto
        </Button>
      </Form>
    </div>
  );
}

export default UpdateProduct;