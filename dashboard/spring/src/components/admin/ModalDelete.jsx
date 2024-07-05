import { useState } from "react";
import PropTypes from 'prop-types'

function ModalDelete({productId, refreshProducts}) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      const response = await fetch(
        `http://localhost:3030/api/admin/delete/${productId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data);
      refreshProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog p-0">
        <div className="modal-content bg-modal-edit">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Eliminar el producto
            </h1>
            <button
              type="button"
              className="btn-close "
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <span className="text-white fs-5 fw-bold">
              ¿Está seguro que desea eliminar el producto?
            </span>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
              disabled={isDeleting}
              data-bs-dismiss="modal"
            >
              {isDeleting ? "Eliminando..." : "Eliminar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}
ModalDelete.propTypes = {
    productId: PropTypes.string,
    refreshProducts: PropTypes.func.isRequired
  
  }


export default ModalDelete;
