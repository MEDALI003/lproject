
const basket=require("../Models/basket")


exports.addbasket=async(req,res)=>{
    try {
        const newBasket=new basket(req.body)
        await newBasket.save()
        res.status(200).send({msg:"added successefully"})
    } catch (error) {
        res.status(500).send({error})
    }
}
exports.getbasket=async(req,res)=>{
    try {
        const foundBasket=await basket.find()
        res.status(200).send({foundBasket})
    } catch (error) {
        res.status(500).send({error})
    }
}
