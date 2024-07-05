import PropTypes from "prop-types";



function ModalEdit({product}) {
  
  console.log(product);
  return (
    <div
      className="modal fade"
      id="modalEdit"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  p-0">
        <div className="modal-content bg-modal-edit text-white">
          <div className="modal-header border-bottom border-secondary">
            <h3 className="modal-title fs-5 fw-bolder " id="exampleModalLabel">
              Edición del producto
            </h3>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4">
            <form className="row g-3">
              <div className="col-md-6">
                <label
                  className="form-label fw-bolder text-center d-block "
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input type="text" className="form-control  " id="name" placeholder="Ingrese el nombre" />
              </div>
              <div className="col-md-6">
                <label
                  className="form-label fw-bolder text-center d-block"
                  htmlFor="price"
                >
                  Precio
                </label>
                <input type="number" className="form-control  " id="price" placeholder="Ingrese el precio" />
              </div>
              <div className="col-md-6">
                <label
                  className="form-label fw-bolder text-center d-block"
                  htmlFor="discount"
                >
                  Descuento
                </label>
                <input type="number" className="form-control " id="discount" placeholder="Ingrese el descuento" />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bolder text-center d-block">
                  Envío Gratis
                </label>
                <div className="text-center">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="si"
                      name="free_shipping"
                    />
                    <label className="form-check-label" htmlFor="si">
                      Sí
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="no"
                      name="free_shipping"
                    />
                    <label className="form-check-label" htmlFor="no">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <label className="form-label fw-bolder text-center d-block">
                  Imagen del producto
                </label>
                <input className="form-control " type="file" id="image" />
              </div>
              <div className="col-12">
                <label className="form-label fw-bolder text-center d-block">
                  Categoría
                </label>
                <div className="text-center">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="pizza"
                      value="2"
                      name="category_id"
                    />
                    <label className="form-check-label" htmlFor="pizza">
                      Pizza
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="hamburguesa"
                      value="3"
                      name="category_id"
                    />
                    <label className="form-check-label" htmlFor="hamburguesa">
                      Hamburguesa
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="papas"
                      value="1"
                      name="category_id"
                      
                    />
                    <label className="form-check-label" htmlFor="papas">
                      Papas Fritas
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <label
                  className="form-label fw-bolder text-center d-block"
                  htmlFor="detail"
                >
                  Detalles del producto
                </label>
                <textarea
                  className="form-control  "
                  id="detail"
                  rows="3"
                  placeholder="Ingrese los detalles del producto"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer border-top border-secondary">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" className="btn btn-outline-light">
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalEdit.propTypes = {
  product: PropTypes.number,
};

export default ModalEdit;
