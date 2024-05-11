const db = require("../../../database/models")
module.exports= function(req,res){
   const { page } = req.query

   db.Product.paginate({
      
      page: +page,
      paginate: 5,
      order: [['id', 'ASC']],

    include: [{ association: "categorias" }],	
   })
   .then( ({ docs:productos, pages, total }) =>{
    res.json(productos, pages, total)
   })

}