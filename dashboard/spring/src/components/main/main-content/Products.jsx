
import CeldasProduct from "./childen/CeldasProduct";
import {Link} from "react-router-dom";

function Products() {
  return (
    <main className="col-md-10 mt-4 m-auto col-lg-10 text-white">
      <div className="table-container">
        <h4>List Products</h4>
        <table className="table table-dark table-striped">
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">Imagen</th>
              <th scope="col">Titulo</th>
              <th scope="col">Precio</th>
              <th scope="col">Descuento</th>
              <th scope="col">Descripcion</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
          
           
            
            <CeldasProduct/>
          
          
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end mt-4">
      <div>
          <Link to="/createProduct"><button type="button" className="btn btn-outline-secondary text-white">Crear Producto</button></Link>
        </div>
      </div>
      
    </main>
  );
}

export default Products;
