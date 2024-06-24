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