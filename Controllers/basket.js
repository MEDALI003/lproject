
const basket=require("../Models/basket")
const user=require("../Models/user")
const product=require("../Models/product")
exports.addbasket=async(req,res)=>{
    try {
        const newBasket=new basket(req.body)
        await newBasket.save()
        res.status(200).send({msg:"added successefully"})
    } catch (error) {
        res.status(500).send({error})
    }
}
exports.getbasket = async (req, res) => {
    try {
        let facture = [];
        const foundBasket = await basket.find();
        for (let i = 0; i < foundBasket.length; i++) {
            const foundUser = await user.findOne({_id: foundBasket[i].userId});
            const userName = foundUser.name + " " + foundUser.lastName;
            let prodtable = [];
            const basketItems = foundBasket[i].basket; // Access basket items for the current basket
            for (let j = 0; j < basketItems.length; j++) {
                const foundProduct = await product.findOne({_id: basketItems[j].productId});
                prodtable.push({...foundProduct, quantity: basketItems[j].quantity});
            }
            facture.push({
                userName: userName,
                basket: prodtable,
                date: foundBasket[i].date
            });
        }
        res.status(200).send({facture}); // Changed Facture to facture
    } catch (error) {
        res.status(500).send({error});
    }
};
