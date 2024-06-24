import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

function FormUpdate({ onSubmit, id, producto}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  return (
   
      <form
        className="row mx-auto text-center p-4 form-border text-white"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"

      >
        <h4>Editar Producto</h4>
        <h6 className="text-light" id="form-create">
          Ingrese la información
        </h6> 
        <div className="col-sm-12 col-md-6 mb-2 text-white">
          <label className="form-label" htmlFor="title">ID</label>
          <input className="form-control" type="text" name="title" value={id} />
    </div>

        <div className="col-sm-12 col-md-6 mb-2">
          <label className="form-label d-block fw-bolder" htmlFor="name">
            Nombre
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            {...register("name", { required: "El nombre es requerido" })}
            defaultValue={producto.name}
            placeholder="Ingrese el nombre del producto"

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
            defaultValue={producto.price}
            placeholder="Ingrese el precio del producto"

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
            defaultValue={producto.discount}
            placeholder="Ingrese el descuento del producto"

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
                defaultValue={producto.free_Shipping}
    
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
            defaultValue={producto.image}
            
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
                defaultValue={producto.category_id}
    
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
                defaultValue={producto.category_id}
    
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
                defaultValue={producto.category_id}
    
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
            defaultValue={producto.detail}
            placeholder="Ingrese los detalles del producto"

          ></textarea>
          {errors.detail && (
            <p className="text-danger">{errors.detail.message}</p>
          )}
        </div>

        <div className="col mb-1 d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-success">
            Actualizar
          </button>
          <button type="reset" className="btn btn-danger">
            Limpiar
          </button>
        </div>
        </form>

      )   

    }

UpdateProduct.propTypes = {
  productId: PropTypes.string.isRequired,
  refreshProducts: PropTypes.func.isRequired

}


export default FormUpdate