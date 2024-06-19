const { allProducts,allUsers,allCategories } = require("../../controllers/api/lists");

const router = require("express").Router();



router.get("/products",allProducts);
router.get("/users",allUsers);
router.get("/categories",allCategories);







module.exports = router