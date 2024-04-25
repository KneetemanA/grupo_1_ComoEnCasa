//const {loadData} = require('../../database')
const db = require('../../database/models')
module.exports = (req, res) => {
  
  //const productos= loadData("productos")
db.Product.findAll({include:[{association:"categorias"}]})
.then((productos=>{
  const userlogin = req.session.user;
    /*Aqui solo renderizamos el contenido de la vista*/
      res.render("admin/crearProduct", {productos}, (err, content) =>{
        err && res.send(err.message)
    
    // Aqui renderizamos el partials de dashboeard 
    // QUE YA VA A TENER LA VISTA INCLUIDA QUE RENDERIZAMOS ANTERIORMENTE    
        res.render("partials/dashboard", {
          views: content,
          userlogin
        })
      })
}))

  };