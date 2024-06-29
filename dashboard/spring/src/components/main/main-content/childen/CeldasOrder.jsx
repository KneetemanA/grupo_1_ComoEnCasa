import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CeldasOrder() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/list/pedidos")
      .then((res) => res.json())
      .then((data) => setOrder(data.data));
  }, []);
  console.log(order);

  return (
    <>
      {order.map((ord) => (
        <tr className="text-center" key={ord.id}>
          <td>{ord.id}</td>
          <td className={ord.state=="completed"?"text-success": ord.state=="pending"?"text-warning":"text-danger"} >{ord.state}</td>
          <td className="text-start">{ord.user.name}</td>
          <td className="text-start  ">
            {ord.products.map((p, index) => (
              <div key={index}>
                {p.name}  ({ ord.orderProducts[index]?.quantity || 0})
              </div>
            ))}
          </td>
          <td>{ord.subtotal}</td>
          <td>{ord.total}</td>
          <td>
            <div className="d-flex flex-column align-items-center fs-5">
              <a href="#">
                <i className="bi bi-pencil-square decoration-none text-white"></i>
              </a>
              <Link to="#">
                <i
                  className="bi bi-trash decoration-none text-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                ></i>
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default CeldasOrder;
