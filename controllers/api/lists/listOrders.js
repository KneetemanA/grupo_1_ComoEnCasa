const db =require("../../../database/models")


module.exports=function(req,res){

    db.OrderProduct.findAll({
        include:["order","product"],
      
    })
    .then((orders) => {
        res.status(200).json({
            data: orders,
            total: orders.length,
        });
    })
    .catch((error) => {
        console.error("Error al obtener pedidos:", error);
        res.status(500).send("Error interno del servidor");
    });
}