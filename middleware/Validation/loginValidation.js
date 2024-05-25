const {body} =require("express-validator")

loginValidation= [
    body("user").notEmpty().trim().escape().withMessage("Debe rellenar el campo"),
    body("password").notEmpty().trim().escape().withMessage("Debe rellenar el campo")


]

module.exports = loginValidation
