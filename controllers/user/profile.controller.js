const db = require("../../database/models");
const fetch = require("node-fetch");

module.exports = (req, res) => {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then((response) => response.json())
    .then((data)=> {
       const {provincias} = data;

       const userlogueado = req.session.user;

        db.User.findOne({
            where: { id: userlogueado.id }
        })
        .then((updatedUser) => {
            db.infoUser.findOne({
                where: { user_id: updatedUser.id }
            })
            .then((infouser) => {
                res.render("profileUser", { userlogueado: updatedUser, infouser, provincias });
                
            })
            .catch((err) => {
                res.send(err.message);
            });
        })
        .catch((err) => {
            res.send(err.message);
        });
    })
    .catch((err) => {
        res.send(err.message);
    });
};
