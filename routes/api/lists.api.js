const { allProducts } = require("../../controllers/api/lists");

const router = require("express").Router();



router.get("/products",allProducts);






module.exports = router