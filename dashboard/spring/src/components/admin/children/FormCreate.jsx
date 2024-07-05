import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function FormCreate({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="container-form  modal-lg mx-auto mt-4 px-5">
      <Link to="/products">
        <button type="button" className="btn btn-outline-secondary text-white mb-3">
          Ver lista
        </button>
      </Link>
      <form
        className="row g-3 mx-auto p-4 bg-modal-edit text-white rounded"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <h3 className="col-12 text-center fs-4 fw-bolder mb-4">Creación de Nuevo Producto</h3>

        <div className="col-md-6">
          <label className="form-label fw-bolder text-center d-block" htmlFor="name">Nombre</label>
          <input
            className="form-control"
            type="text"
            id="name"
            {...register("name", { required: "El nombre es requerido" })}
            placeholder="Ingrese el nombre del producto"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bolder text-center d-block" htmlFor="price">Precio</label>
          <input
            className="form-control"
            type="number"
            id="price"
            {...register("price", {
              required: "El precio es requerido",
              min: { value: 0, message: "El precio debe ser mayor o igual a 0" },
            })}
            placeholder="Ingrese el precio del producto"
          />
          {errors.price && <p className="text-danger">{errors.price.message}</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bolder text-center d-block" htmlFor="discount">Descuento</label>
          <input
            className="form-control"
            type="number"
            id="discount"
            {...register("discount", {
              required: "El descuento es requerido",
              min: { value: 0, message: "El descuento no puede ser negativo" },
              max: { value: 100, message: "El descuento no puede ser mayor a 100" },
            })}
            placeholder="Ingrese el descuento del producto"
          />
          {errors.discount && <p className="text-danger">{errors.discount.message}</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bolder text-center d-block">Envío Gratis</label>
          <div className="text-center">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="si"
                value="true"
                {...register("free_shipping", { required: "Debes seleccionar una opción" })}
              />
              <label className="form-check-label" htmlFor="si">Sí</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="no"
                value="false"
                {...register("free_shipping", { required: "Debes seleccionar una opción" })}
              />
              <label className="form-check-label" htmlFor="no">No</label>
            </div>
          </div>
          {errors.free_shipping && <p className="text-danger">{errors.free_shipping.message}</p>}
        </div>

        <div className="col-12">
          <label className="form-label fw-bolder text-center d-block">Imagen del producto</label>
          <input
            className="form-control"
            type="file"
            id="image"
            {...register("image", { required: "La imagen es requerida" })}
          />
          {errors.image && <p className="text-danger">{errors.image.message}</p>}
        </div>

        <div className="col-12">
          <label className="form-label fw-bolder text-center d-block">Categoría</label>
          <div className="text-center">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="pizza"
                value="2"
                {...register("category_id", { required: "Debes seleccionar una categoría" })}
              />
              <label className="form-check-label" htmlFor="pizza">Pizza</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="hamburguesa"
                value="3"
                {...register("category_id", { required: "Debes seleccionar una categoría" })}
              />
              <label className="form-check-label" htmlFor="hamburguesa">Hamburguesa</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="papas"
                value="1"
                {...register("category_id", { required: "Debes seleccionar una categoría" })}
              />
              <label className="form-check-label" htmlFor="papas">Papas Fritas</label>
            </div>
          </div>
          {errors.category_id && <p className="text-danger">{errors.category_id.message}</p>}
        </div>

        <div className="col-12">
          <label className="form-label fw-bolder text-center d-block" htmlFor="detail">Detalles del producto</label>
          <textarea
            className="form-control"
            id="detail"
            rows="3"
            {...register("detail", { required: "Debes proporcionar detalles del producto" })}
            placeholder="Ingrese los detalles del producto"
          ></textarea>
          {errors.detail && <p className="text-danger">{errors.detail.message}</p>}
        </div>

        <div className="col-12 text-end mt-4">
          <button type="submit" className="btn btn-outline-light me-2">Crear</button>
          <button type="reset" className="btn btn-danger">Limpiar</button>
        </div>
      </form>
    </div>
  );
}

FormCreate.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormCreate;