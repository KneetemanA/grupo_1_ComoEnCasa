const router = require("express").Router();
const {
  getOrder, addProductToOrder, canceledOrder, completedOrder, removeProductToOrder, moreQuantity, lessQuantity, 
} = require("../../controllers/api/cart");

/* /api/cart */
router.get("/", getOrder);

router.patch("/agregar/:id", addProductToOrder);

router.patch("/completar", completedOrder);

router.patch("/cancelar", canceledOrder);

router.patch("/remover/:id", removeProductToOrder);

router.patch("/more/:id", moreQuantity);

router.patch("/less/:id", lessQuantity);





module.exports = router;