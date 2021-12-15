const Product = require('../Models/product')
const Cart = require('../Models/cart')

const addItem = async (req, res) => {
    const product = await Product.findById(req.body) 
    const {name, price} = product 

    const addedItem = await Cart.create({name, price})

    res.status(200).json({ addedItem })
}

const removeItem = async (req, res) => {
    res.send(`removeItem`)
}

module.exports = { addItem, removeItem }