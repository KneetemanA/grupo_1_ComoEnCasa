
const { validationResult } = require("express-validator");
const path = require('path');
const fs = require('fs');
const db = require('../../database/models')

module.exports = (req, res) => {
    const errors = validationResult(req);
    const imagenInicial= req.session.imageProfile
    if (errors.isEmpty()) {
        
        const image = req.file;
        const { name, user, street, phone, email, province, city, num } = req.body;
        const id = req.params.id;
        
        db.infoUser.update({
            phone: phone,
            province: province,
            city: city,
            street: street,
            num: num
        },{
            where: { id: id }
        })
        .then(() => {
            
            db.User.update({
                name: name,
                user: user,
                email: email,
                imageProfile: image ? image.filename : imagenInicial 
            },{
                where: { id: id }
            })
            .then(() => {
                res.redirect("/user/perfil/" + id);
            })
            
        })
        ;
    } else {
        // Si hay errores de validación
        const fileError = req.fileValidationError;
        // Eliminar la imagen subida por Multer si existe
        if (req.file && req.file.path) {
            fs.unlink(req.file.path, (err) => {
                if (err) {
                    console.error('Error al eliminar el archivo:', err);
                } else {
                    console.log('Archivo eliminado con éxito');
                }
            });
        }
        
       
        const userlogueado = req.session.user;
        res.render("profileUser", {
            errors: errors.array(),
            old: req.body,
            userlogueado,
            fileError: fileError ? fileError.message : null
        });
    }
};
