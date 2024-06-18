
import SideBar from '../sidebar/SideBar';
import NavBar from '../main/header/NavBar';


function Layout({ children }) {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="flex-grow-1 d-flex flex-column color-bg">
        <NavBar />
        
          {children}
        
      </div>
    </div>
  );
}

export default Layout;