const router = require("express").Router();
const {
  getOrder, addProdOrder, canceledOrder, clearProductOrder, 
  completeOrder, removeProdOrder, moreQuantity, lessQuantity, 
} = require("../../controllers/api/cart");

/* /api/carrito */
router.get("/", getOrder);

router.patch("/agregar/:id", addProdOrder);

router.patch("/completar", completeOrder);

router.patch("/cancelar", canceledOrder);

router.patch("/clear", clearProductOrder);

router.patch("/remover/:id", removeProdOrder);

router.patch("/more/:id", moreQuantity);

router.patch("/less/:id", lessQuantity);


module.exports = router;