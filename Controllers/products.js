const Product = require('../Models/product')

//should be working if its not try changing some var names around :)
const createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(200).json({ product })
}

const getAllProducts = async (req, res) => {
    const products = await Product.find({})
    res.status(200).json({ products })
}

module.exports = { createProduct, getAllProducts }