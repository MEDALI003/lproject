
const product = require("../Models/product")

exports.addProduct=async(req,res)=>{
    try {
        const newProduct=new product(req.body)
        await newProduct.save()
        res.status(200).send({msg:"product added successfully"})
    } catch (error) {
        res.status(500).send({msg:"there is a problem",error})
        
    }
}
exports.getproduct=async(req,res)=>{
    try {
        const products=await product.find()
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send({msg:"problem on getting the product"})
    }
}
exports.editprice=async(req,res)=>{
    try {
        const {_id}= req.params
        await product.updateOne({_id},{$set:{price:req.body}})
    } catch (error) {
        res.status(500).send({msg:"problem on updating the product"})
    }
}
exports.deleteProduct=async(req,res)=>{
    try {
        const {_id}=req.params
        await product.deleteOne({_id})
        res.status(200).send({msg:"deleted successfully"})
    } catch (error) {
        res.status(500).send({msg:"cannot delete the product"})
    }
}