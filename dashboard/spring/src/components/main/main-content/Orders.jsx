import CeldasOrder from "./childen/CeldasOrder"


function Orders() {
  return (
    <div className="col-md-10 mt-4 m-auto col-lg-10 text-white">

      <div className="table-container">
        <h4>List Orders</h4>
        <table className="table table-dark table-striped">
          <thead>
            <tr className="text-center">
              <th  scope="col">ID</th>
              <th scope="col">Estado</th>
              <th className="text-start" scope="col">Usuario</th>
              <th className="text-start"  scope="col">Productos</th>
              <th scope="col" >SubTotal</th>
              <th scope="col">Total</th>
              <th scope="col">Acciones</th>
           
              
            </tr>
          </thead>
          <tbody>
            
          <CeldasOrder/>
          
              
             
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
