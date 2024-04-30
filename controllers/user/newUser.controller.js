const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const fs = require('fs');
const db = require("../../database/models");

module.exports = function(req, res) {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { name, user, email, password, tic } = req.body;

        db.User.create({
            name: name ? name.trim() : "",
            user: user ? user.trim() : "",
            email: email ? email.trim() : "",
            password: bcrypt.hashSync(password ? password.trim() : "", 10),
            imageProfile: req.file ? req.file.filename : "",
            tic: tic !== undefined,
            role: "admin"
        })
        .then(newUser => {
            db.infoUser.create({
                phone: null,
                province: null,
                city: null,
                street: null,
                num: null,
                user_id: newUser.id 
            })
            .then(() => {
                res.redirect("/user/login");
            });
        });
    } else {
        if (req.file && req.file.path) {
            fs.unlink(req.file.path, (err) => {
                if (err) {
                    console.error('Error al eliminar el archivo:', err);
                } else {
                    console.log('Archivo eliminado con éxito');
                }
            });
        }
        res.render("register", {
            errors: errors.array(),
            old: req.body
        });
    }
};
