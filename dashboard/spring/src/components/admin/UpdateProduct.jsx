import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from "prop-types";

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
    formData.append('free_Shipping', producto.free_Shipping);
    formData.append('category', producto.category)
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
    <div className="container-form mx-auto mt-4 px-5">
      <Link
        to="/products"
        className="btn btn-primary mb-3 text-decoration-none"
      >
        Ver Lista
      </Link>{" "}
      <form
        className="row mx-auto text-center p-4 form-border text-white"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"

        // Cuando el usuario envía el formulario:
        // react-hook-form recopila todos los datos del formulario.
        // handleSubmit procesa estos datos.
        // Luego, handleSubmit llama a onSubmit (que es la función handleFormSubmit de CreateProduct) y le pasa los datos del formulario como argumento.
      >
        <h4>Creación de Nuevo Producto</h4>
        <h6 className="text-light" id="form-create">
          Ingrese la información
        </h6>

        <div className="col-sm-12 col-md-6 mb-2">
          <label className="form-label d-block fw-bolder" htmlFor="name">
            Nombre
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            {...register("name", { required: "El nombre es requerido" })}
            placeholder="Ingrese el nombre del producto"
            onChange={handleFileChange} 
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        <div className="col-sm-12 col-md-6 mb-2">
          <label className="form-label d-block fw-bolder" htmlFor="price">
            Precio
          </label>
          <input
            className="form-control"
            type="number"
            id="price"
            {...register("price", {
              required: "El precio es requerido",
              min: {
                value: 0,
                message: "El precio debe ser mayor o igual a 0",
              },
            })}
            placeholder="Ingrese el precio del producto"
            onChange={handleFileChange} 
          />
          {errors.price && (
            <p className="text-danger">{errors.price.message}</p>
          )}
        </div>

        <div className="col-sm-12 col-md-6 mb-2">
          <label className="form-label d-block fw-bolder" htmlFor="discount">
            Descuento
          </label>
          <input
            className="form-control"
            type="number"
            id="discount"
            {...register("discount", {
              required: "El descuento es requerido",
              min: { value: 0, message: "El descuento no puede ser negativo" },
              max: {
                value: 100,
                message: "El descuento no puede ser mayor a 100",
              },
            })}
            placeholder="Ingrese el descuento del producto"
            onChange={handleFileChange} 
          />
          {errors.discount && (
            <p className="text-danger">{errors.discount.message}</p>
          )}
        </div>

        <div className="col-sm-12 col-md-6 mb-2">
          <label className="form-label fw-bolder">Envío Gratis</label>
          <div className="d-flex gap-3 justify-content-center">
            <div>
              <input
                className="form-check-input mx-1"
                type="radio"
                id="si"
                value="true"
                {...register("free_shipping", {
                  required: "Debes seleccionar una opción",
                })}
                onChange={handleFileChange} 
              />
              <label className="form-check-label fw-bolder" htmlFor="si">
                Sí
              </label>
            </div>
            <div>
              <input
                className="form-check-input mx-1"
                type="radio"
                id="no"
                value="false"
                {...register("free_shipping", {
                  required: "Debes seleccionar una opción",
                })}
              />
              <label className="form-check-label fw-bolder" htmlFor="no">
                No
              </label>
            </div>
          </div>
          {errors.free_shipping && (
            <p className="text-danger">{errors.free_shipping.message}</p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label className="form-label fw-bolder">Imagen del producto</label>
          <input
            className="form-control"
            type="file"
            id="image"
            {...register("image", {
              required: "La imagen es requerida",
            })}
          />
          {errors.image && (
            <p className="text-danger">{errors.image.message}</p>
          )}
        </div>

        <div className="col-12 mb-2">
          <label className="form-label fw-bolder">Categoría</label>
          <div className="d-flex gap-3 justify-content-center">
            <div>
              <input
                className="form-check-input mx-1"
                type="radio"
                id="pizza"
                value="2"
                {...register("category_id", {
                  required: "Debes seleccionar una categoría",
                })}
                onChange={handleFileChange} 
              />
              <label className="form-check-label fw-bolder" htmlFor="pizza">
                Pizza
              </label>
            </div>
            <div>
              <input
                className="form-check-input mx-1"
                type="radio"
                id="hamburguesa"
                value="3"
                {...register("category_id", {
                  required: "Debes seleccionar una categoría",
                })}
                onChange={handleFileChange} 
              />
              <label
                className="form-check-label fw-bolder"
                htmlFor="hamburguesa"
              >
                Hamburguesa
              </label>
            </div>
            <div>
              <input
                className="form-check-input mx-1"
                type="radio"
                id="papas"
                value="1"
                {...register("category_id", {
                  required: "Debes seleccionar una categoría",
                })}
                onChange={handleFileChange} 
              />
              <label className="form-check-label fw-bolder" htmlFor="papas">
                Papas Fritas
              </label>
            </div>
          </div>
          {errors.category_id && (
            <p className="text-danger">{errors.category_id.message}</p>
          )}
        </div>

        <div className="col-12 mb-4 mt-3">
          <textarea
            className="form-control"
            id="detail"
            {...register("detail", {
              required: "Debes proporcionar detalles del producto",
            })}
            style={{ height: "75px" }}
            placeholder="Ingrese los detalles del producto"
            onChange={handleFileChange} 
          ></textarea>
          {errors.detail && (
            <p className="text-danger">{errors.detail.message}</p>
          )}
        </div>

        <div className="col mb-1 d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-success">
            Crear
          </button>
          <button type="reset" className="btn btn-danger">
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}


UpdateProduct.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UpdateProduct;