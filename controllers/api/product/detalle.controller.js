const db=require("../../../database/models")
module.exports=function(req,res){

    db.Product.findByPk(req.params.id,{
        include: [{ association: "categorias" }]})
    .then(productos =>{
        res.status(200).json({
            data:productos
        })
    })
    
}