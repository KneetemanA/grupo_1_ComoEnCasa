
import SideBar from '../sidebar/SideBar';
import NavBar from '../main/header/NavBar';
import PropTypes from 'prop-types'





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

Layout.propTypes = {
  children: PropTypes.node.isRequired

}



export default Layout;