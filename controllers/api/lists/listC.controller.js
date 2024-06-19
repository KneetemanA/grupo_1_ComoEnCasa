const db = require("../../../database/models")

module.exports = function (req, res) {
    db.Category.findAll()
        .then((categories) => {
            res.status(200).json({
                data: categories,
                total: categories.length,
            });
        })
        .catch((error) => {
            console.error("Error al obtener productos:", error);
            res.status(500).send("Error interno del servidor");
        });
};