const path = require('path')
const userlogin = require('../../middleware/userLogeado')
const db = require('../../database/models')

module.exports = (req,res) => {
  const userlogin = req.session.user;
    const id = req.params.id;

   db.Product.findByPk(id)
   
    .then((product) => {

       res.render("admin/editProduct", {'productEdit': product},(err, content) =>{
        err && res.send(err.message)
        res.render("partials/dashboard", {
        views: content,userlogin
        });
      })
    })
}