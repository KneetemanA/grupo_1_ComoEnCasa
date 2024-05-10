const router = require("express").Router();
const adminApi=require("../../controllers/api/admin")



router.post("/create",adminApi.create);


module.exports = router