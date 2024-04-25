const DB = require("../../database/models");
const { Op } = DB.Sequelize;

module.exports = function(req, res) {
    const userlogueado = req.session.user;

    DB.Product.findAll({
        include: [{ association: "categorias" }],
        where: { 
            name: { [Op.like]: "%" + req.query.productoBuscado + "%" }
        }
    })
    .then(resultadosBusqueda => {
        res.render("search", { resultadosBusqueda, userlogueado });
    })}