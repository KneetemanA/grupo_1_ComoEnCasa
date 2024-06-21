
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
          
           
             {/* <tr className=" text-center">
              <th scope="row">1</th>
              <td>
                <img src={img} alt="..." style={{ width: "50px" }} />
              </td>
              <td>Burguer</td>
              <td>1000</td>
              <td>10%</td>
              <td>
                Lorem leniti, iusto quae veritatis officia non odio, architecto
                numquam aut.
              </td>
              <td>
                <div className="d-flex flex-column align-items-center fs-5">
                  <a href="#"><i className="bi bi-pencil-square decoration-none text-white"></i></a>
                  <a href="#"><i className="bi bi-trash decoration-none text-danger"></i></a>
                </div>
              </td>
            </tr> */}
            
            <CeldasProduct/>
            
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <Link to="/createProduct" className="btn btn-primary mt-4">
          Crear producto
        </Link>
      </div>
      
    </main>
  );
}

export default Products;
