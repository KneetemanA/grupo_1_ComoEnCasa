import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import MainContent from "./components/main/main-content/MainContent";
import Orders from "./components/main/main-content/Orders";
import Users from "./components/main/main-content/Users";
import Products from "./components/main/main-content/Products";
import CreateProduct from "./components/admin/CreateProduct";
// import UpdateProduct2 from "./components/admin/UpdateProduct2";





function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
         <Route path="createProduct" element={<CreateProduct />} />
         {/* <Route path="updateProduct" element={<UpdateProduct2 />} /> */}
         
      
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;