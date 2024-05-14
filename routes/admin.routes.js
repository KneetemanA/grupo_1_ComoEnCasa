const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");
const { upload } = require("../middleware/uploadfile");
const userLogeado = require("../middleware/userLogeado");

// "/admin"
router.get("/",userLogeado, adminController.admin);
router.get("/listProducts",userLogeado, adminController.admin);


router.get("/crearProduct",userLogeado,adminController.crear)
router.post("/crearProduct",upload.single('image'),adminController.newProduct);

// "/admin"
router.get("/editar/:id",userLogeado, adminController.editProduct);
router.put("/editar/:id", upload.single('image'), adminController.updateProduct)

// "/admin"
router.get("/eliminar-producto",userLogeado,adminController.deleteProduct)
router.delete("/eliminar-producto/:id",adminController.postDeleteProduct)

//pedidos
router.get("/pedidos",userLogeado,adminController.pedidos)

router.get("/logout",adminController.logout)

module.exports = router;