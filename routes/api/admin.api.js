const router = require("express").Router();
const adminApi=require("../../controllers/api/admin")



router.post("/create",adminApi.create);
router.put("/edit/:id", adminApi.update)


module.exports = router