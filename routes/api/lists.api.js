const { allProducts,allUsers,allCategories,allOrders } = require("../../controllers/api/lists");

const router = require("express").Router();



router.get("/products",allProducts);
router.get("/users",allUsers);
router.get("/categories",allCategories);
router.get("/pedidos",allOrders)







module.exports = router