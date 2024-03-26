const {check,body} = require('express-validator');
const path = require('path')

const validateResult = [
    check('name')
        .isLength({ min: 3, max: 16 }).withMessage('El nombre debe tener entre 3 y 16 caracteres')
        .notEmpty().withMessage('El nombre es requerido').bail(),
    
    check('user')
        .notEmpty().withMessage('El nombre de usuario es requerido').bail(),
    
    check('email')
        .isEmail().withMessage('El email no es válido')
        .normalizeEmail().bail(),
    
    check('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0 }).withMessage('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número').bail(),
    
    check('tic').bail(),

    
    body('imageProfile').custom((value, { req }) => {
        const reqFile = req.reqFile?.imageProfile?.length;
        const extensionesAceptadas = ['.jpg', '.jpeg', '.png'];
    
        if (!reqFile) {
            throw new Error('La imagen de perfil es requerida');
        } else {
            let extensionesImage = path.extname(file.originalName);
            if (!extensionesAceptadas.includes(extensionesImage)) {
                throw new Error('Las extensiones permitidas son .jpg, .png, .jpeg');
            }
        }
    
        return true;
    })
]


module.exports = validateResult;