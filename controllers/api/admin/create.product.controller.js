const db =require("../../../database/models")

module.exports=function(req,res){
    db.Product.create(req.body)
    .then(productos => {
        res.json(productos)}
    )
}