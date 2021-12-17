const Product = require('../Models/product')
const Cart = require('../Models/cart')

const getItems = async (req, res) => {
    const cart = await Cart.find({})
    res.status(200).json({ cart })
}

const addItem = async (req, res) => {
    const product = await Product.findById(req.body) 
    const { name, price } = product 

    const addedItem = await Cart.create({ name, price })

    

    res.status(200).json({ addedItem })
}

const updateItem = async (req, res) => {
    const {id, dir, quant} = req.body
    let updated;
    if(dir === 'plus'){
        updated = await Cart.findByIdAndUpdate(id, {quantity: Number(quant) + 1}) 

    }else{
        if(quant == 1){
            updated = await Cart.findByIdAndDelete(id)
        }
        else{
            updated = await Cart.findByIdAndUpdate(id, {quantity: quant - 1}) 
        }
    }
    res.status(200).json( updated )
}

module.exports = { addItem, updateItem, getItems }