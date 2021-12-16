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

const removeItem = async (req, res) => {
    const item = await Cart.findById(req.body) 
    const { _id } = item 
    const cart = await Cart.findByIdAndDelete(_id)
    res.status(200).json({ cart })
}

module.exports = { addItem, removeItem, getItems }