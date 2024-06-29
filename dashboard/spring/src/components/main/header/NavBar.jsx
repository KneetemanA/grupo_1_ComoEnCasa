import{useState, useEffect} from "react";

function NavBar() {
  const [dark,setDark]=useState(false)
useEffect(() => {
  if (dark===false) {
    document.body.classList.remove("dark-mode");
  }
  else{
    document.body.classList.add("dark-mode");
  }
}, [dark]);

  const darkMode=()=>{
    setDark(!dark)

  }


  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-dark  p-0 color-bg">
      <div className="conteiner-navbar">
        <div className="input-group container-search">
          <span className="input-group-text  border-0">
            <i className="bi bi-search text-secondary fs-5"></i>
          </span>
          <input
            type="text"
            className="form-control  border-0 text-secondary fs-5"
            placeholder="Buscar Producto..."
            aria-label="Search"
          />
        </div>

        


        

        <div className="container-notifications">
          <ul className="navbar-nav ms-auto d-flex flex-row align-items-center justify-content-end p-3">
           <li className="nav-item pe-3">
              <a onClick={darkMode} className="nav-link" href="#" aria-label="Notifications">
                <i className={dark===false?"bi bi-moon fs-5":"bi bi-sun fs-5"}></i>
              </a>
            </li>
          
          
          
          
          <li className="nav-item pe-3">
              <a className="nav-link" href="#" aria-label="Notifications">
                <i className="bi bi-envelope fs-5"></i>
              </a>
            </li>


            <li className="nav-item pe-2">
              <a className="nav-link" href="#" aria-label="Notifications">
                <i className="bi bi-bell fs-5"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    </>
    
  );
}

export default NavBar;
