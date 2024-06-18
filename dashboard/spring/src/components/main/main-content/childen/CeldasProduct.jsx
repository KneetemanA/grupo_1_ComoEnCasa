import{useState,useEffect} from 'react'

function CeldasProduct() {
    const[productos,setProductos]=useState([])
    
     useEffect(() =>  {
      fetch("http://localhost:3030/api/list/products")
        .then((res) => res.json())
        .then((data) => setProductos(data.data));
    }, []);
    console.log(productos)
  return (
    
    <>
    {productos.map((producto) => (
        <tr className=' text-center' key={producto.id}>
            
            <th >{producto.id}</th>
            <td>
                <img src= {`http://localhost:3030${producto.image}`} alt={producto.name} style={{ width: "100px" }} />
            </td>
            <td>{producto.name}</td>
            <td>{producto.price}</td>
            <td>{producto.discount}%</td>
            <td>{producto.detail}</td>
            <td>
                <div className="d-flex flex-column align-items-center fs-5">
                    <a href="#"><i className="bi bi-pencil-square decoration-none text-white"></i></a>
                    <a href="#"><i className="bi bi-trash decoration-none text-danger"></i></a>
                </div>
            </td>
        </tr>
    ))}
</>
  )
}

export default CeldasProduct
