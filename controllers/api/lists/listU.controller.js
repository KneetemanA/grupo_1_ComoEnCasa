const db = require("../../../database/models")


module.exports = function (req, res) {
    db.User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then((users) => {
            res.status(200).json({
                data: users,
                total: users.length,
            });
        })
        .catch((error) => {
            console.error("Error al obtener productos:", error);
            res.status(500).send("Error interno del servidor");
        });
};