const { loadData, saveData } = require('../../database');
const { validationResult } = require("express-validator");
const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const users = loadData("users");
        const image = req.file;
        const { name, user, street, phone, email, province, city, num } = req.body;
        const userEdit = req.params.user;
        const usersMap = users.map((u) => {
            if (u.user === userEdit) {
                const userEdited = {
                    ...u,
                    name: name ? name.trim() : u.name,
                    user: user ? user.trim() : u.user,
                    phone: phone ? +phone : "",
                    email: email ? email.trim() : u.email,
                    province: province ? province.trim() : "",
                    city: city ? city.trim() : "",
                    street: street ? street.trim() : "",
                    num: num ? +num : "",
                    image: image ? image.filename : u.image
                };
                if (image?.filename) {
                    const pathBefore = path.join(__dirname, `../../public/images/${u.image}`);
                    const existsFile = fs.existsSync(pathBefore);

                    if (existsFile) {
                        fs.unlinkSync(pathBefore);
                    }
                }
                return userEdited;
            }
            return u;
        });
        saveData(usersMap, "users");
        res.redirect("/user/perfil/" + user);
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
        
        const users = loadData("users");
        const userr = req.params.user;
        const userlogueado = users.find((u => u.user === userr));
        res.render("profileUser", {
            errors: errors.array(),
            old: req.body,
            userlogueado,
            fileError: fileError ? fileError.message : null
        });
    }
};
