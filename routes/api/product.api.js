const router = require("express").Router();
const productApi=require("../../controllers/api/product")


router.get("/",productApi.list);
router.get("/:id",productApi.detalle);
router.get("/images/:image",productApi.renderImg);


module.exports = router