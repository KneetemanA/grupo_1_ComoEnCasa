import { useState, useEffect } from 'react';
import ModalDelete from '../../../admin/ModalDelete';
import ModalEdit from '../../../admin/ModalEdit';
import { Link } from 'react-router-dom';

function CeldasProducto() {
    const [productos, setProductos] = useState([]);
    const [productoIdParaEliminar, setProductoIdParaEliminar] = useState(null);
    const [productoParaEditar, setProductoParaEditar] = useState(null);

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = () => {
        fetch("http://localhost:3030/api/list/products")
            .then((res) => res.json())
            .then((data) => setProductos(data.data));
    };

    return (
        <>
            {productos.map((producto) => (
                <tr id={producto.id} className='text-center' key={producto.id}>
                    <th>{producto.id}</th>
                    <td>
                        <img src={`http://localhost:3030${producto.image}`} alt={producto.name} style={{ width: "100px" }} />
                    </td>
                    <td>{producto.name}</td>
                    <td>{producto.price}</td>
                    <td>{producto.discount}%</td>
                    <td>{producto.detail}</td>
                    <td>
                        <div className="d-flex flex-column align-items-center fs-5">
                            <Link to="#" onClick={() => setProductoParaEditar(producto.id )} data-bs-toggle="modal" data-bs-target="#modalEdit">
                                <i className="bi bi-pencil-square decoration-none text-white"></i>
                            </Link>
                            <Link to="#" onClick={() => setProductoIdParaEliminar(producto.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="bi bi-trash decoration-none text-danger"></i>
                            </Link>
                        </div>
                    </td>
                </tr>
            ))}
            
            <ModalDelete productId={productoIdParaEliminar} refreshProducts={fetchProductos} />
            <ModalEdit product={productoParaEditar} />
        </>
    );
}

export default CeldasProducto;