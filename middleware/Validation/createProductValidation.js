const { check, body } = require("express-validator");
const path = require("path");

const createValidation = [
  check("title")
    .notEmpty().withMessage("El campo debe rellenarse")
    .bail()
    .isAlphanumeric("es-ES", { ignore: " .," }).withMessage("Debe ser alfanumérico")
    .bail()
    .isLength({ min: 5, max: 50 }).withMessage("El título debe contener entre 5 y 50 caracteres"),

  check("price")
    .notEmpty().withMessage("El precio es requerido")
    .bail()
    .isNumeric().withMessage("El precio debe ser numérico")
    .bail(),

  check("discount")
    .notEmpty().withMessage("El descuento es requerido")
    .bail()
    .isNumeric().withMessage("El descuento debe ser numérico")
    .bail(),

  check("detail")
    .notEmpty().withMessage("El detalle es requerido")
    .bail()
    .isAlphanumeric("es-ES", { ignore: " .," }).withMessage("La descripción debe ser alfanumérica")
    .bail()
    .isLength({ min: 10, max: 300 }).withMessage("El detalle del producto debe tener un mínimo de 10 y un máximo de 300 caracteres"),

  check("category")
    .notEmpty().withMessage("La categoría es requerida")
    .bail(),

  check("freeShipping")
    .notEmpty().withMessage("El campo de envío gratis es requerido")
    .bail()
    .isBoolean().withMessage("El campo de envío gratuito debe ser booleano"),

  body('image')
    .custom((value, { req }) => {
      const reqFile = req.file;

      const extensionesAceptadas = ['.jpg', '.jpeg', '.png'];
      if (!reqFile) {
        throw new Error('La imagen de perfil es requerida');
      } else {
        let extension = path.extname(reqFile.originalname).toLowerCase();
        if (!extensionesAceptadas.includes(extension)) {
          throw new Error('Las extensiones permitidas son .jpg, .png y .jpeg');
        }
      }
      return true;
    })
];

module.exports = createValidation;
