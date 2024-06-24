import { useState, useEffect } from 'react';
import ModalDelete from './ModalDelete';
import { Link } from 'react-router-dom';

function CeldasProduct() {
    const [productos, setProductos] = useState([]);
    const [productIdToDelete, setProductIdToDelete] = useState(null);

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
                <tr className='text-center' key={producto.id}>
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
                            <a href="#"><i className="bi bi-pencil-square decoration-none text-white"></i></a>
                            <Link to="#" onClick={() => setProductIdToDelete(producto.id)}>
                                <i className="bi bi-trash decoration-none text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                            </Link>
                        </div>
                    </td>
                </tr>
            ))}
            <ModalDelete productId={productIdToDelete} refreshProducts={fetchProductos} />
        </>
    );
}

export default CeldasProduct;