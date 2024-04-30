const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = function(req, res) {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        db.User.findOne({
            where: {
                user: req.body.user
            }
        })
        .then(user => {
            if (!user) {
                return res.render("login", { error: "Datos inválidos" });
            }
            
            const userCorrecto = bcrypt.compareSync(req.body.password, user.password);

            if (!userCorrecto) {
                return res.render("login", { error: "Datos inválidos" });
            } else {
                req.session.user = user; 
                
                if (req.body.recordarme !== undefined) {
                    res.cookie("recordarme", user.user, { maxAge: 300000 });
                }
                return res.redirect("/");
            }
        })
        .catch(error => {
            console.error("Error al buscar usuario:", error);
            return res.status(500).send("Error interno del servidor");
        });
    } else {
        return res.render("login", { errors: errors.array() });
    }
};
