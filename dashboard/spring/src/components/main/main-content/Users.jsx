import CeldarUser from "./childen/CeldarUser"


function Users() {
  return (
    
    <div className="col-md-10 mt-4 m-auto col-lg-10 text-white">

      <div className="table-container">
        <h4>List Users</h4>
        <table className="table table-dark table-striped">
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">UserName</th>
              <th scope="col">Rol</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            
          
           <CeldarUser/>
              
             
            
          </tbody>
        </table>
      </div>
    </div>
    
 
  )
}

export default Users
