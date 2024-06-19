const db = require("../../../database/models")


module.exports = function (req, res) {
    db.Product.findAll({
        include: [{ association: "categorias" }],
    })
        .then((productos) => {
            res.status(200).json({
                data: productos,
                total: productos.length,
            });
        })
        .catch((error) => {
            console.error("Error al obtener productos:", error);
            res.status(500).send("Error interno del servidor");
        });
};
