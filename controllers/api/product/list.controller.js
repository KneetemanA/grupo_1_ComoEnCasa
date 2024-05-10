const db = require("../../../database/models")
module.exports= function(req,res){
   db.Product.findAll({
    include: [{ association: "categorias" }],	
   })
   .then(productos =>{
    res.json(productos)
   })

}