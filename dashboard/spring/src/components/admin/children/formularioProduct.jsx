import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, Button, NavLink } from 'react-bootstrap';

const FormularioProduct = (props) => {
  const [producto, setProducto] = useState({
    title: props.producto ? props.producto.title : '',
    file: props.producto ? props.producto.file : '',
    price: props.producto ? props.producto.price : '',
    discount: props.producto ? props.producto.discount : '',
    description: props.producto ? props.producto.description : '',
  });
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState('');
  const { title, price, discount, description } = producto;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const valores = [title, file, price, discount, description];
    let errorMsg = '';

    const todosLosCamposLlenos = valores.every((campo) => {
      const valor = `${campo}`.trim();
      return valor !== '' && valor !== '0';
    });

    if (todosLosCamposLlenos) {
      const producto = {
        id: uuidv4(),
        title,
        file,
        price,
        discount,
        description,
      };
      props.handleOnSubmit(producto);
    } else {
      errorMsg = 'Por favor, rellene todos los campos.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProducto((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const hadleChangeInputImg = (e) =>{
    const file = e.target.files[0]
    if(file){
      setFile(file)
    }
  }

  return (
    <div className="col-sm-12 col-md-6 mb-2 fs-5 mx-auto">
      
      <div className='col-sm-12 col-md-6 fs-5 mx-auto text-white'>
        {errorMsg && <p className="errorMsg color-bg">{errorMsg}</p>}
      </div>
      
      <Form onSubmit={handleOnSubmit} className="row mx-auto text-center p-4 form-border text-white">

      <div className="col-sm-12 col-md-6 mb-2 text-white">
        <label className="form-label" for="titulo">Titulo</label>
        <input className="form-control" type="text" name="title" value={producto.title} 
        placeholder="Ingrese el titulo del producto" onChange={handleInputChange}/>
      </div>

      <div className="col-sm-12 col-md-6 mb-2 fs-5 text-white">
       <label className="form-label" for="precio">Precio </label>
        <input className="form-control" type="number" name="price" value={producto.price}
            placeholder="Ingrese el precio del producto"
            onChange={handleInputChange}
          />
        </div>
        
        <div className="col-sm-12 col-md-6 mb-2 fs-5 text-white">
            <label className="form-label" for="descuento">Descuento </label>
            <input className="form-control" type="number" name="discount" value={producto.discount}
            placeholder="Ingrese el descuento del producto"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-2 fs-5 text-white">
            <label for="fotoproducto" className="form-label">Foto del producto</label>
            <input className="form-control" type="file" id="fotoproducto" name="image" value={producto.file}
            placeholder="Ingrese la foto del producto"
            onChange={hadleChangeInputImg}
            />
          </div>

          <div className="mb-5 fs-5 text-white">
          <label for="Descripcion" className='form-label'>Descripción</label>
          <textarea className="form-control" type="text" name="description" value={producto.description}
            placeholder="Ingrese la descripción del producto"
            onChange={handleInputChange}
          />
        </div>

        <Button type="submit" className="submit-btn text-white">
         <a href="/products" className='text-white'>Crear Producto</a>
        </Button>
  
      </Form>

    </div>
    
  );
};

export default FormularioProduct;
