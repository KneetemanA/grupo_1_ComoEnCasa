const db = require("../../../database/models")
const getOriginUrl = require("../../utils/getOriginUrl")



module.exports= function(req,res){
    const { page } = req.query
 // con paginacion
    db.Product.paginate({
       
       page: +page,
       paginate: 5,
       order: [['id', 'ASC']],
 
     include: [{ 
      association: "categorias" 

     }],	
    })
    .then( ({ docs:productos, pages, total }) =>{
     const originUrl = getOriginUrl(req)
     
      res.status(200).json({
       data:productos, 
       paginas:pages, 
       total,
       originUrl
     })
    })
    .catch(error => {
     console.error("Error al obtener productos:", error);
     res.status(500).send("Error interno del servidor");
    })
 
 }