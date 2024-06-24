import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CeldarUser() {
 const[user,setUsers]=useState([]);


 useEffect(() => {
  fetch("http://localhost:3030/api/list/users")
    .then((res) => res.json())
    .then((data) => setUsers(data.data));
 }, []);
 console.log(user)
 
 
 
    return (
        <>
        {user.map((u) => (
            <tr className='text-center' key={u.id}>
                <th>{u.id}</th>
                <td><img src={`http://localhost:3030/images/${u.imageProfile}`} alt={u.name} style={{ width: "50px" }} /></td>
               <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.user}</td>
                <td>{u.role}</td>
                <td>
                    <div className="d-flex flex-column align-items-center fs-5">
                        <a href="#"><i className="bi bi-pencil-square decoration-none text-white"></i></a>
                        <Link to="#">
                            <i className="bi bi-trash decoration-none text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        </Link>
                    </div>
                </td>
            </tr>
        ))}
        
    </>
  )
}
