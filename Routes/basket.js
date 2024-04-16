const express=require("express")
const { addbasket, getbasket } = require("../Controllers/basket")
const router=express.Router()





router.post("/assbasket",addbasket)
router.get("/getbasket",getbasket)


module.exports=router