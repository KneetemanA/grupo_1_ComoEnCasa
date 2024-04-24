const { loadData, saveData } = require('../../database');
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const fs = require('fs');
const path = require('path');

module.exports = function (req, res){ 
    const errors = validationResult(req);
    
    if (errors.isEmpty()) {
        const imageFile = req.file;
        const users = loadData('users');
        const { name, user, email, password, tic } = req.body;
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        const newUser = {
            id: newId,
            name: name ? name.trim() : '',
            user: user ? user.trim() : '',
            email: email ? email.trim() : '',
            password: bcrypt.hashSync(password ? password.trim() : '', 10),
            tic: tic !== undefined,
            image: imageFile ? imageFile.filename : '',
            phone: "",
            province: "",
            city: "",
            street: "",
            num: ""
        };

        const updatedUsers = [...users, newUser];
        saveData(updatedUsers, 'users');
        res.redirect('/user/login');
    } else {
        // Si hay errores de validación, eliminar la imagen subida por Multer si existe
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
