const db = require("../../database/models")

module.exports = (req, res) => {
  const user = req.session.user
  db.User.findOne({
    WHERE: {name:user.user}
  })
  .then(userlogin => {
    db.Product.findAll()
    .then(productos => {
      // const users = loadData("users")
      // const user = req.session.user
      // const userlogin = users.find((u => u.user === user.user))
      
          res.render("admin/listProducts", {productos}, (err, content) =>{
            err && res.send(err.message)
    
            
        // Aqui renderizamos el partials de dashboeard 
        // QUE YA VA A TENER LA VISTA INCLUIDA QUE RENDERIZAMOS ANTERIORMENTE    
            res.render("partials/dashboard", {
              userlogin,
              views: content
              
            })
          })
    })
  })

  
 
  }





  