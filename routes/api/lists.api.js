const { allProducts,allUsers } = require("../../controllers/api/lists");

const router = require("express").Router();



router.get("/products",allProducts);
router.get("/users",allUsers);






module.exports = router