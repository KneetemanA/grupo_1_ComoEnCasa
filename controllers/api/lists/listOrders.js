const db =require("../../../database/models")


module.exports=function(req,res){

    db.Order.findAll({
        include:["user","products","orderProducts"],
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