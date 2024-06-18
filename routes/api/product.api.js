const router = require("express").Router();
const productApi=require("../../controllers/api/product")


router.get("/",productApi.list);
router.get("/:id",productApi.detalle);





module.exports = router